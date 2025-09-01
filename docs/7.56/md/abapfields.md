  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobsolete_declarations.htm) →  [Declaration and Loading](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenaddress_obsolet.htm) → 

FIELDS

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfields_shortref.htm)

Obsolete Syntax

FIELDS dobj.

Effect

This statement, which is forbidden in classes, addresses a data object dobj of the program. A warning from the extended program check can be avoided if the data object dobj is addressed in the program dynamically and not statically.

Hint

This statement, which is forbidden in classes, is replaced by the [pragma](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpragma_glosry.htm "Glossary Entry") ##NEEDED.