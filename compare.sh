DIFF="diff -ruw"

for p in overview hardware software experiments; do
	$DIFF ../../existing-content/${p}.html output/cr-${p}.html
done

for p in caravan pv cr-etel-tutorial cr-etel-rspecs index aqa; do
	$DIFF ../../existing-content/${p}.html output/${p}.html
done
