import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  transaction: any;

  constructor(private route: ActivatedRoute, private transactionService: TransactionService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.transactionService.getTransactionDetails('id').subscribe(data => {
      this.transaction = data;
    });
  }
}
