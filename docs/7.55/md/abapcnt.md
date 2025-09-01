  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_extracts_extended.htm) →  [AT, Extract](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapat_extract.htm) → 

cnt( )

Obsolete Syntax

... cnt(field) ....

Effect

For the fields field1, field2, ... of the field groups of an [extract dataset](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenextract_dataset_glosry.htm "Glossary Entry"), automatically data objects named cnt(field1), cnt(field2), ... of data type i are created. These fields can be accessed only within a LOOP and are filled with values for sorted extract datasets using the statements [AT END OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapat_extract.htm) and [AT LAST](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapat_extract.htm).

If field1, field2, ... are fields with a non-numeric data type of the field group header and the extract dataset was sorted by field1, field2, ... , then cnt(field1), cnt(field2), ... contain the number of different values that field1, field2, ... have within the group level or the entire dataset.

If the fields cnt(field1), cnt(field2), ... are accessed without the extract dataset first being sorted, a uncatchable exception can be raised.

Hints

-   No [substring access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoffset_length.htm) cnt(len) can be made on a data object called cnt without an offset being specified explicitly. The compiler always interprets an offset specified like this as a field for an extract dataset.

-   No [customizing include](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencustomizing_include_glosry.htm "Glossary Entry") may be specified for field if it is empty.