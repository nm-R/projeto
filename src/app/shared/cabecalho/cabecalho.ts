import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-cabecalho',
  standalone: false,
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class Cabecalho {

  // exemplo do angular material para o searchbox
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  // exemplo do angular material para cada drobox das categorias
  markets = [
  { value: 'supermercado', viewValue: 'Supermercado' },
  { value: 'hortifruti', viewValue: 'Hortifruti' },
  { value: 'padaria', viewValue: 'Padaria' }
];


// -----------

  categories = [
    {
      id: 'casa-cozinha',
      name: 'Casa & Cozinha',
      subcategories: ['Utensílios de Cozinha', 'Móveis', 'Decoração', 'Organização']
    },
    {
      id: 'moda',
      name: 'Moda',
      subcategories: ['Feminina', 'Masculina', 'Infantil', 'Acessórios']
    },
    {
      id: 'eletronicos',
      name: 'Eletrônicos',
      subcategories: ['Smartphones', 'Computadores', 'TV & Áudio', 'Games']
    },
    {
      id: 'beleza',
      name: 'Beleza',
      subcategories: ['Cosméticos', 'Perfumes', 'Cabelo', 'Skincare']
    },
    {
      id: 'ferramentas',
      name: 'Ferramentas',
      subcategories: ['Ferramentas Manuais', 'Ferramentas Elétricas', 'Jardim', 'Automotivas']
    },
    {
      id: 'esportes-hobbies',
      name: 'Esportes & Hobbies',
      subcategories: ['Fitness', 'Esportes', 'Artesanato', 'Instrumentos Musicais']
    },
    {
      id: 'brinquedos',
      name: 'Brinquedos',
      subcategories: ['Educativos', 'Bonecas', 'Carrinhos', 'Quebra-cabeças']
    }
  ];

  activeDropdown: string | null = null;
  selectedCategory: string = '';

  toggleDropdown(categoryId: string): void {
    this.activeDropdown = this.activeDropdown === categoryId ? null : categoryId;
  }

  selectSubcategory(categoryName: string, subcategory: string): void {
    this.selectedCategory = `${categoryName} > ${subcategory}`;
    this.activeDropdown = null;
  }

  closeDropdowns(event: Event): void {
    // Fecha dropdowns ao clicar fora
    if (!(event.target as HTMLElement).closest('.category-item')) {
      this.activeDropdown = null;
    }
  }
}
