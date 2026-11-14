import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactus',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {

private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  // State Management using Signals
  isSubmitting = signal<boolean>(false);
  isSubmitted = signal<boolean>(false);
  errorMessage = signal<string | null>(null);
  referenceNumber = signal<string>('');
  charCount = signal<number>(0);

  // Reactive Form Setup
  enquiryForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    stage: ['MVP / Early Traction'],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1200)]]
  });

  // Stages Options
  stages: string[] = [
    'Pre-Seed / Concept Validation',
    'MVP / Early Traction',
    'Seed / Product-Market Fit',
    'Series A+ / Scaled Architecture',
    'Enterprise Digital Transformation'
  ];

  // Update character counter dynamically
  onMessageInput(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    this.charCount.set(textarea.value.length);
  }

  // Generate a random institutional reference ID
  private generateRefId(): string {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `REF #${randomNum}`;
  }

  onSubmit(): void {
    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set(null);

    const formData = {
      access_key: 'e053747b-9f7d-4ac5-b1f2-ea80155a0ab5', // ضع مفتاح Web3Forms المجاني هنا
      subject: `New SaaS Enquiry from ${this.enquiryForm.value.company || this.enquiryForm.value.name}`,
      from_name: 'SaaS Portfolio Contact',
      ...this.enquiryForm.getRawValue()
    };

    // Real API Call (Web3Forms) - قم بتفعيل هذا الجزء عند وضع المفتاح الخاص بك
    
    this.http.post('https://api.web3forms.com/submit', formData).subscribe({
      next: () => {
        this.referenceNumber.set(this.generateRefId());
        this.isSubmitting.set(false);
        this.isSubmitted.set(true);
      },
      error: () => {
        this.isSubmitting.set(false);
        this.errorMessage.set('Transmission failed. Please verify your connection and retry.');
      }
    });
    

    // Simulation for immediate preview (امسح هذا الجزء عند تفعيل الـ HTTP بالأعلى)
    setTimeout(() => {
      this.referenceNumber.set(this.generateRefId());
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
    }, 900);
  }

  resetForm(): void {
    this.enquiryForm.reset({
      name: '',
      email: '',
      company: '',
      stage: 'MVP / Early Traction',
      message: ''
    });
    this.charCount.set(0);
    this.isSubmitted.set(false);
    this.errorMessage.set(null);
  }

}
