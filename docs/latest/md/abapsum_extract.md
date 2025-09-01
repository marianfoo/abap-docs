  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_extracts_extended.htm) →  [AT, Extract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_extract.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sum%28%20%29%2C%20ABAPSUM_EXTRACT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sum( )

Obsolete Syntax

... sum(field) ....

Effect

For the fields field1, field2, ... of the field groups of an [extract dataset](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenextract_dataset_glosry.htm "Glossary Entry"), data objects named sum(field1), sum(field2), ... of the same data type as field1, field2, ... are created automatically. These fields can be accessed only within a LOOP and are filled with values for sorted extract datasets using the statements [AT END OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_extract.htm) and [AT LAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_extract.htm): If field1, field2, ... are fields with numeric data type, sum(field1), sum(field2), ... contain the total of the values of field1, field2, ... within the group level or the entire dataset.

If the fields sum(field1), sum(field1), ... are accessed without first sorting the extract dataset, an uncatchable exception can be raised.

Hints

-   No [substring access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoffset_length.htm) sum(len) can be made on a data object called sum without an explicit offset specification. The compiler always interprets an offset specified like this as a field for an extract dataset.
-   No [customizing include](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencustomizing_include_glosry.htm "Glossary Entry") may be specified for field if it is empty.