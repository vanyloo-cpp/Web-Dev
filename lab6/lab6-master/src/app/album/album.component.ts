import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AlbumsService, Album } from '../services/albums.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album',
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css',
  standalone: true,
})
export class AlbumComponent implements OnInit {
  albums: Album[] = [];
  newAlbumTitle: string = '';

  constructor(private albumsService: AlbumsService) { } // ✅ Инициализируем сервис

  ngOnInit() {
    this.albumsService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
      },
      error: (err) => console.error('Ошибка загрузки альбомов:', err),
    });
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter(album => album.id !== id);
  }

  addAlbum() {
    if (!this.newAlbumTitle.trim()) return;  // Проверяем, чтобы не было пустых значений

    const newAlbum: Album = {
      id: 0,  // Сервер сам назначит ID
      title: this.newAlbumTitle, // Добавляем userId, так как JSONPlaceholder требует его
    };

    this.albumsService.createAlbum(newAlbum).subscribe({
      next: (album) => {
        this.albums.unshift(album);  // Добавляем альбом в начало массива
        this.newAlbumTitle = '';  // Очищаем поле ввода
      },
      error: (err) => console.error('Ошибка при добавлении альбома:', err),
    });
  }
}
