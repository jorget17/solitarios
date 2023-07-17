python3 zeroes.py
java -jar hodoku.jar /vp /vst /bs hg.txt /o hodoku_generated_out.txt
python3 hodoku_generated_export.py
rm hodoku_generated_out.txt
rm hg_one_line.txt