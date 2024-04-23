Aplikacja do przeglądania książek. Ksiązki wyświetlane wg kategorii, możliwość wyszukania ksiązki po frazie.
Poszczególną książkę można zapisać do ulubionych ( zapisuje się to też lokalnie, poprzez wykorzystanie localStarage ), można przeczytac informację dotyczącą książki(komponent BookDetails, który wyświetla poszczególne informację z API).
Ksiązki z listy ulubionych można usunąć.

Napotkane problemy:
Route - jak już zaczął działać to nie wczytywał na start żadnej z "podstron", ale wystarczyło zagłębić się w lekturę dokumentacji.
Przy dodawaniu do ulubionych książek pojawił sie problem, gdy dodawało się ksiązki z jednej kategori, one ładnie dodawały się do listy, w momencie, kiedy chielibyśmy dodac do ulubionych ksiązki ze różnych kategori, wyświetlały się tylko książki dodane z ostatniej wybranej kategori, abby rozwiązać ten problem skorzystałam z localStorage, dzięki czemu dodawanie książek z różnych kategori jest możliwe.
Kolejną trudnością była funkcjolaność wyszukiwarki, ingerowała w już gotowe komponenty. żeby za bardzo nie ingerowała w kategorię dodałam zmianę kategori na " " w celu uniknięcia problemwó z kategoriami,
tak naprawde rozdzieliłam funkcjonalnośc kategori od wyszukiwarki, ustwiając przy wyborze kategori (wyszukiwaną fraze na "") i podczas wyszukiwania frazy, nie korzystam z kategorii.
