  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Internal Table Processing](javascript:call_link\('abenitab_obsolete.htm'\)) → 

SORT itab BY field\_symbol

Obsolete Syntax

[SORT](javascript:call_link\('abapsort_itab.htm'\)) itab BY <fs1> <fs2> ...

Effect

In internal tables with [header lines](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), field symbols can also be specified as a sort criterion for comp1 comp2 ... after [SORT ... BY](javascript:call_link\('abapsort_itab.htm'\)). If a component of the header line or the whole header line is assigned to the field symbol when the statement is executed, the table is sorted by the corresponding component or the whole line. If no data object is assigned to a field symbol, the specification is ignored. If a different data object is assigned to a field symbol, a non-handleable exception is raised.

Note

Instead of using field symbols for dynamic component specifications, it is best to specify parenthesized character-like data objects or an internal table, which contain the name of the components.

Bad Example

name = 'ITAB-COL1'.
ASSIGN (name) TO <fs>.
SORT itab BY <fs>.

Good Example

name = 'COL1'.
SORT itab BY (name).