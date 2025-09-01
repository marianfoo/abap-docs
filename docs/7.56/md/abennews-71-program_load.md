  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-70_ehps.htm) →  [News for Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-71.htm) → 

Lazy Loading of Programs in Release 7.0, EhP2

When compiling an ABAP program before Release 7.0, EhP2, all associated include programs were loaded when first accessing a global class, a global interface, or a type pool. These includes contain declarations of the corresponding class, interface, or type pool which can be used globally.

From Release 7.0, EhP2, these include programs are not loaded until an element declared in them is actually required. For example, a class class is no longer loaded when a TYPE REF TO class type reference is made, but when a component of the class is accessed or the class itself.

This internal optimization of ABAP Compiler has the following additional consequences:

[1\. The statement TYPE-POOLS is obsolete](#!ABAP_MODIFICATION_1@1@)
[2\. The addition LOAD for CLASS and INTERFACE is obsolete](#!ABAP_MODIFICATION_2@2@)

Modification 1   

The statement TYPE-POOLS is obsolete

The statement [TYPE-POOLS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype-pools.htm) is no longer required for the use of a data type, a constant, or a macro from a type pool. The elements of a type pool can now be addressed in the same way as all other objects in ABAP Dictionary without previously loading the type pool.

TYPE-POOLS statements are ignored by ABAP Compiler from Release 7.0, EhP2, and can be deleted.

In list processing in particular, the include programs <LIST>, <SYMBOL>, <ICON>, <LINE>, and <COLOR> are no longer needed, since they only contain TYPE-POOLS statements.

Modification 2   

The addition LOAD for CLASS and INTERFACE is obsolete

The now rarely used statements

-   [CLASS ... DEFINITION LOAD.](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_interface_load.htm)
-   [INTERFACE ... LOAD.](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_interface_load.htm)

are no longer required

From Release 7.0, EhP2 these statements are ignored by ABAP Compiler and can be deleted.