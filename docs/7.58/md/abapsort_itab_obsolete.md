  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Internal Table Processing](javascript:call_link\('abenitab_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SORT%20itab%20BY%20field_symbol%2C%20ABAPSORT_ITAB_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SORT itab BY field\_symbol

Obsolete Syntax

[SORT](javascript:call_link\('abapsort_itab.htm'\)) itab BY <fs1> <fs2> ...

Effect

In internal tables with [header lines](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), field symbols can also be specified as a sort criterion for comp1 comp2 ... after [SORT ... BY](javascript:call_link\('abapsort_itab.htm'\)). If a component of the header line or the entire header line is assigned to the field symbol when the statement is executed, the table is sorted by the corresponding component or the entire line. If no data object is assigned to a field symbol, the specification is ignored. If a different data object is assigned to a field symbol, an uncatchable exception is raised.

Hint

Instead of using field symbols for dynamic component specifications, it is best to specify parenthesized character-like data objects or an internal table, which contain the name of the components.

Bad Example

name = 'ITAB-COL1'.
ASSIGN (name) TO <fs>.
SORT itab BY <fs>.

Good Example

name = 'COL1'.
SORT itab BY (name).