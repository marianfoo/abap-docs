  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Extracts](javascript:call_link\('abenabap_extracts_extended.htm'\)) →  [AT - Extract](javascript:call_link\('abapat_extract.htm'\)) → 

cnt( )

Obsolete Syntax

... cnt(field) ....

Effect

For the fields field1, field2, ... of the field groups of an [extract dataset](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry"), automatically data objects named cnt(field1), cnt(field2), ... of data type i are created. These fields can be accessed only within a LOOP and are filled with values for sorted extract datasets using the statements [AT END OF](javascript:call_link\('abapat_extract.htm'\)) and [AT LAST](javascript:call_link\('abapat_extract.htm'\)).

If field1, field2, ... are fields with a non-numeric data type of the field group header and the extract dataset was sorted by field1, field2, ... , then cnt(field1), cnt(field2), ... contain the number of different values that field1, field2, ... have within the control level or the entire dataset.

If the fields cnt(field1), cnt(field2), ... are accessed without the extract dataset first being sorted, a non-handleable exception can be raised.

Notes

-   No [substring access](javascript:call_link\('abenoffset_length.htm'\)) cnt(len) can be made on a data object called cnt without an offset being specified explicitly. The compiler always interprets an offset specified like this as a field for an extract dataset.
    
-   No [customizing include](javascript:call_link\('abencustomizing_include_glosry.htm'\) "Glossary Entry") may be specified for field if it is empty.