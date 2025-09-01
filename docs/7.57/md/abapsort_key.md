  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Extracts](javascript:call_link\('abenabap_extracts_extended.htm'\)) →  [SORT, Extract](javascript:call_link\('abapsort_extract.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SORT, sort_key, ABAPSORT_KEY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
 for improvement:)

SORT, sort\_key

[Short Reference](javascript:call_link\('abapsort_shortref.htm'\))

Obsolete Syntax

... BY field1 *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]*
       field2 *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]*
       ...

Additions:

[1\. ... ASCENDING*|*DESCENDING](#!ABAP_ADDITION_1@1@)
[2\. ... AS TEXT](#!ABAP_ADDITION_2@2@)

Effect

When a sort key is specified using the addition BY, sorting is not done by field group header, but by the field1 field2 ... fields specified after it. For field1 field2 ..., only components of field group header or field groups that contain only fields of field group header can be specified. The sort order depends on the order in which the components field1 field2 ... are specified. The number of fields to be used for sorting is limited to 50.

For field1 field2 ..., field symbols can also be specified. If a component of the field group header is assigned to a field symbol when the statement is executed, sorting takes place according to the corresponding component. If no data object is assigned to a field symbol, the specification is ignored. If a different data object is assigned to a field symbol, an uncatchable exception is raised.

Hint

No [customizing includes](javascript:call_link\('abencustomizing_include_glosry.htm'\) "Glossary Entry") may be specified for field1 field2 ... if they are empty.

Addition 1   

... ASCENDING*|*DESCENDING

If, after a component field1 field2 ..., neither of the ASCENDING or DESCENDING additions is specified, the predefined sort direction is applied. If one of the additions ASCENDING or DESCENDING is specified, it overwrites the default for this component.

Addition 2   

... AS TEXT

Without the addition AS TEXT after a text-like component field1 field2 ..., the default is applied. If the addition AS TEXT is specified after a text-like component, it overwrites the default for this component. In the case of non-text-like components, AS TEXT cannot be specified. If AS TEXT is specified after a field group, the addition only affects the text-like components of this group.