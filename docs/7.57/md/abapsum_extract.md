  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Extracts](javascript:call_link\('abenabap_extracts_extended.htm'\)) →  [AT, Extract](javascript:call_link\('abapat_extract.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sum\( \), ABAPSUM_EXTRACT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
improvement:)

sum( )

Obsolete Syntax

... sum(field) ....

Effect

For the fields field1, field2, ... of the field groups of an [extract dataset](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry"), data objects named sum(field1), sum(field2), ... of the same data type as field1, field2, ... are created automatically. These fields can be accessed only within a LOOP and are filled with values for sorted extract datasets using the statements [AT END OF](javascript:call_link\('abapat_extract.htm'\)) and [AT LAST](javascript:call_link\('abapat_extract.htm'\)): If field1, field2, ... are fields with numeric data type, sum(field1), sum(field2), ... contain the total of the values of field1, field2, ... within the group level or the entire dataset.

If the fields sum(field1), sum(field1), ... are accessed without first sorting the extract dataset, an uncatchable exception can be raised.

Hints

-   No [substring access](javascript:call_link\('abenoffset_length.htm'\)) sum(len) can be made on a data object called sum without an explicit offset specification. The compiler always interprets an offset specified like this as a field for an extract dataset.
-   No [customizing include](javascript:call_link\('abencustomizing_include_glosry.htm'\) "Glossary Entry") may be specified for field if it is empty.