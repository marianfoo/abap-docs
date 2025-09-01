  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-755.htm) → 

ABAP Dictionary in Release 7.55

[1\. Internal Handling of the Name Table](#!ABAP_MODIFICATION_1@1@)

Modification 1

Internal Handling of the Name Table

The internal handling of the [name table (nametab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenname_table_glosry.htm "Glossary Entry") that stores the runtime objects of data types in the ABAP Dictionary has changed.

This has the following consequences:

-   The internal ABAP statement [EXPORT NAMETAB](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_nametab.htm) cannot be used any more and leads to a runtime error.

-   The internal ABAP statement [IMPORT NAMETAB](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapimport_nametab.htm) is still partly supported for reasons of downward compatibility. Any access to entries for [DDIC table types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_table_type_glosry.htm "Glossary Entry") leads to a runtime error. Any other access leads to errors from [ATC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenatc_glosry.htm "Glossary Entry").

-   The former native database table DDNTF for separate nametab field descriptions is not supported any more and will be deleted.