  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Entity Manipulation Language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml.htm) → 

ABAP EML - SET LOCKS

Syntax

SET LOCKS OF root\_name
   ENTITY entity\_1\_name FROM lt1
  *\[*ENTITY entity\_2\_name FROM lt2 ...*\]*
  *\[*FAILED   it\_failed*\]*
  *\[*REPORTED it\_reported*\]*.
SET LOCKS
   ENTITY entity\_name FROM lt
  *\[*FAILED it\_failed*\]*
  *\[*REPORTED it\_reported*\]*.

Effect

The explicit locking of instances for a following modification is not necessary since the framework automatically locks instances contained in the method [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhandler_method_modify.htm). However, if the application knows that instances will be needed (that need to be protected so that users cannot change the same data simultaneously), the SET LOCKS statement can be used.

Two types of the statement SET LOCKS are available:

-   a long form SET LOCKS OF root\_name

-   a short form SET LOCKS.

The table types required here can be declared statically using the syntax TYPE ... TABLE FOR LOCK OF (see [Derived Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_derived_types.htm)).

Continue
[ABEN EML - SET LOCKS DYN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_set_locks_dyn.htm)