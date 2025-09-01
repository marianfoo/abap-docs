  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_extracts_extended.htm) →  [AT - Extract](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_extract.htm) → 

sum( )

Obsolete Syntax

... sum(field) ....

Effect

For the fields field1, field2, ... of the field groups of an [extract dataset](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextract_dataset_glosry.htm "Glossary Entry"), automatically data objects named sum(field1), sum(field1), ... of the same data type as field1, field2, ... are created. These fields can be accessed only within a LOOP and are filled with values for sorted extract datasets using the statements [AT END OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_extract.htm) and [AT LAST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_extract.htm): If field1, field2, ... are fields with numeric data type, sum(field1), sum(field1), ... contain the total of the values of field1, field2, ... within the control level or the entire dataset.

If the fields sum(field1), sum(field1), ... are accessed without the extract dataset first being sorted, a non-handleable exception can be raised.

Notes

-   No [substring access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoffset_length.htm) sum(len) can be made on a data object called sum without an offset being specified explicitly. The compiler always interprets an offset specified like this as a field for an extract dataset.
    
-   No [customizing include](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencustomizing_include_glosry.htm "Glossary Entry") may be specified for field if it is empty.