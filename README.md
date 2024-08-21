# Note createror editor REST API 

# (http://localhost:4040/)
Proyektin əsas səhifəsidir.Digər bütün url lər bundan sonrası üçün qeyd olunacaq

# Get requests
 /notes - bu url qeydə alınmış bütün notları göstərir

 /notes/id - bu url isə qeyd olunan id yə uyğun notları göstərir.Əyər həmin id də not tapılmasa uygun mesaj çıxacaq

Əyər notlar tapılmasa buna uyğun mesaj əks olunur

# Post requests
 /create-notes - bu url ə post ataraq not yaratmaq mümkündür.Notumuz istifadəçidən username , title , description alır və buna uygun not yaradır.
Dəyərlər boş göndərilər bilməz.

# Patch requests
 /update-notes/id - Əvvəldən yaradılmış notları yeniləmək üçün istifadə olunacaq.Köhnə nota çatmak üçün həmin notun id sindən istfadə etmək lazımdır buna uygun olaraq daxil olunan dəyərlər dəyişiləcək.Əyər həmin id də not tapılmasa uygun mesaj çıxacaq
Dəyərlər boş göndərilər bilməz.

# Delete request
 /delete-notes/id - Hər hansı notu silmək üçün istifadə olunacaq.Silinəcək nota id si ilə çatmaq mümkündür.Əyər həmin id də not tapılmasa uygun mesaj çıxacaq.




