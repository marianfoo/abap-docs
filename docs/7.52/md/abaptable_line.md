  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_declare_obsolete.htm) → 

TYPES, DATA ... - TABLE LINE

Obsolete Syntax

[TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_itab.htm) ... [WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_keydef.htm) ... [KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_primary_key.htm) TABLE LINE.
[DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_itab.htm)  ... [WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_keydef.htm) ... [KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_primary_key.htm) TABLE LINE.
...

Effect

The addition TABLE LINE can also be specified outside of classes in the declaration statements TYPES, DATA, and so on, instead of the pseudo component table\_line in the definition of the primary table key.

Note

ABAP Compiler should consider this addition as an error, retained only for reasons of downward compatibility. Always specify the pseudo component table\_line instead of TABLE LINE.

Bad Example

TYPES itab TYPE SORTED TABLE OF i WITH UNIQUE KEY TABLE LINE.

Good Example

TYPES itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line.