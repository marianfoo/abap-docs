  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrobust_abap_guidl.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_guidl.htm) → 

Collected Filling

Background

The statement COLLECT can be used to collect lines and insert them in an internal table. If a line with the relevant primary key already exists in the target table, the values of numeric components are added to the values in the existing table line. Otherwise, a new line is inserted in the table.

Rule

Do not fill standard tables with collections of lines

Only use the statement COLLECT for hashed tables or sorted tables with a unique key. Do not use it any more for standard tables.

Details

The statement COLLECT is based on unique entries with respect to the primary key and stable key administration. This means that not all categories of internal tables are suitable for COLLECT:

-   If the statement COLLECT is applied to a standard table, this table first needs its own internal hash administration. Change operations on the table can invalidate this temporary hash administration. After a change operation of this type, the following COLLECT statements must resort to a linear search, which can affect performance considerably. The primary key of a standard table is also never unique.

-   COLLECT can be used for sorted tables and hashed tables without any problems since these, unlike standard tables, always have a separate, stable key administration that can be utilized by COLLECT. COLLECT can work properly for sorted tables only if the primary key is unique. If a sorted table has a non-unique key, only COLLECT can be used to fill the table, which is difficult to guarantee. In hashed tables, the key values are always unique.