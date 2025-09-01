  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_internal_obsolete.htm) →  [Obsolete Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_assignments.htm) → 

MOVE - PERCENTAGE

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_percentage_shortref.htm)

Obsolete Syntax

MOVE source TO destination PERCENTAGE perc *\[*LEFT*|*RIGHT*\]*.

Effect

This variant of the statement [MOVE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_obs.htm) (also obsolete), which is not permitted in classes, assigns the substring of the data object source that begins at the first position and whose length matches the percentage of the total length of source specified in perc, to the data object destination. By default, and if LEFT is specified, destination is left-justified; if RIGHT is specified, it is right-justified.

The data type of the data objects source and destination must be character-like, otherwise the addition PERCENTAGE is ignored. perc expects a data object of type i. If the value of perc is less than or equal to 0, nothing is assigned. If the value of perc is greater than or equal to 100, the entire content of source is assigned.

Note

This variant of the statement MOVE can (if required) be replaced by [substring accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoffset_length.htm) with dynamic offsets/lengths or by [substring functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubstring_functions.htm).

Bad Example

MOVE c1 TO c2 PERCENTAGE n.

Good Example

DATA l TYPE i.
DESCRIBE FIELD c1 LENGTH l.
l = l \* n / 100.
MOVE c1(l) TO c2.