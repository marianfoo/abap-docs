  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

byte order

Determines the order in which the binary representation of the [data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_type_glosry.htm "Glossary Entry") [i](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm), [int8](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm), [decfloat16](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm), [decfloat34](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm), [f](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm), [s](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm), or a character is stored in the memory. A distinction is made between [big](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbig_endian_glosry.htm "Glossary Entry") and [little endian](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlittle_endian_glosry.htm "Glossary Entry"). In the first case, the byte with the highest level, and in the second case the byte with the lowest level, is written to the first position in the memory. The byte order on the current [application server](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_server_glosry.htm "Glossary Entry") can be derived from the static attribute ENDIAN in the [system class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_class_glosry.htm "Glossary Entry") CL\_ABAP\_CHAR\_UTILITIES.

[→ More](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbyteorder.htm)