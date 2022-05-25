def bottle_song(num):
	total = num
	while num > 1:
		print(f"{num} bottles of beer on the wall, {num} bottles of beer.")
		num = num -1
		if num == 1:
			break
		print(f"Take one down and pass it around, {num} bottles of beer on the wall.")
	print(f"Take one down and pass it around, {num} bottle of beer on the wall.")
	print(
f"""1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, {total} bottles of beer on the wall."""
)

bottle_song(99)
