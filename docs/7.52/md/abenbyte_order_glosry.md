  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

byte order

Determines the order in which the binary representation of the [data types](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry") [i](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), [int8](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), [decfloat16](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), [decfloat34](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), [f](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), [s](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), or a character is stored in the memory. A distinction is made between [big](javascript:call_link\('abenbig_endian_glosry.htm'\) "Glossary Entry") and [little endian](javascript:call_link\('abenlittle_endian_glosry.htm'\) "Glossary Entry"). In the first case, the byte with the highest level, and in the second case the byte with the lowest level, is written to the first position in the memory. The byte order on the current [application server](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") can be derived from the static attribute ENDIAN in the [system class](javascript:call_link\('abensystem_class_glosry.htm'\) "Glossary Entry") CL\_ABAP\_CHAR\_UTILITIES.

[→ More](javascript:call_link\('abenbyteorder.htm'\))