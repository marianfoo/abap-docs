  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_declare_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20DATA%2C%20...%2C%20TABLE%20LINE%2C%20ABAPTABLE_LINE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, DATA, ..., TABLE LINE

Obsolete Syntax

[TYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_itab.htm) ... [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_keydef.htm) ... [KEY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_primary_key.htm) TABLE LINE.
[DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_itab.htm)  ... [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_keydef.htm) ... [KEY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_primary_key.htm) TABLE LINE.
...

Effect

The addition TABLE LINE can also be specified outside of classes in the declaration statements TYPES, DATA, and so on, instead of the pseudo component table\_line in the definition of the primary table key.

Hint

The ABAP Compiler should consider this addition an error, retained only for reasons of downward compatibility. The pseudo component table\_line should always be specified instead of TABLE LINE.

Bad Example

TYPES itab TYPE SORTED TABLE OF i WITH UNIQUE KEY TABLE LINE.

Good Example

TYPES itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line.