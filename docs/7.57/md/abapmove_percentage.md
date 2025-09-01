  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Assignments](javascript:call_link\('abenobsolete_assignments.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: MOVE, PERCENTAGE, ABAPMOVE_PERCENTAGE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

MOVE, PERCENTAGE

[Short Reference](javascript:call_link\('abapmove_percentage_shortref.htm'\))

Obsolete Syntax

MOVE source TO destination PERCENTAGE perc *\[*LEFT*|*RIGHT*\]*.

Effect

This variant of the statement [MOVE](javascript:call_link\('abapmove_obs.htm'\)) (also obsolete), which is not allowed in classes, assigns the substring of the data object source that begins at the first position and whose length matches the percentage of the total length of source specified in perc, to the data object destination. By default, and if LEFT is specified, destination is left-aligned; if RIGHT is specified, it is right-aligned.

The data type of the data objects source and destination must be character-like, otherwise the addition PERCENTAGE is ignored. perc expects a data object of type i. If the value of perc is less than or equal to 0, nothing is assigned. If the value of perc is greater than or equal to 100, the entire content of source is assigned.

Hint

If necessary, this variant of the statement MOVE can be replaced by [substring accesses](javascript:call_link\('abenoffset_length.htm'\)) with dynamic offsets/lengths or by [substring functions](javascript:call_link\('abensubstring_functions.htm'\)).

Bad Example

MOVE c1 TO c2 PERCENTAGE n.

Good Example

DATA l TYPE i.
DESCRIBE FIELD c1 LENGTH l.
l = l \* n / 100.
MOVE c1(l) TO c2.