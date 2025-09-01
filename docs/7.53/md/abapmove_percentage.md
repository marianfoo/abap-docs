  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Assignments](javascript:call_link\('abenobsolete_assignments.htm'\)) → 

MOVE - PERCENTAGE

[Quick Reference](javascript:call_link\('abapmove_percentage_shortref.htm'\))

Obsolete Syntax

MOVE source TO destination PERCENTAGE perc *\[*LEFT*|*RIGHT*\]*.

Effect

This variant of the statement [MOVE](javascript:call_link\('abapmove_obs.htm'\)) (also obsolete), which is not permitted in classes, assigns the substring of the data object source that begins at the first position and whose length matches the percentage of the total length of source specified in perc, to the data object destination. By default, and if LEFT is specified, destination is left-justified; if RIGHT is specified, it is right-justified.

The data type of the data objects source and destination must be character-like, otherwise the addition PERCENTAGE is ignored. perc expects a data object of type i. If the value of perc is less than or equal to 0, nothing is assigned. If the value of perc is greater than or equal to 100, the entire content of source is assigned.

Note

This variant of the statement MOVE can (if required) be replaced by [substring accesses](javascript:call_link\('abenoffset_length.htm'\)) with dynamic offsets/lengths or by [substring functions](javascript:call_link\('abensubstring_functions.htm'\)).

Bad Example

MOVE c1 TO c2 PERCENTAGE n.

Good Example

DATA l TYPE i.
DESCRIBE FIELD c1 LENGTH l.
l = l \* n / 100.
MOVE c1(l) TO c2.