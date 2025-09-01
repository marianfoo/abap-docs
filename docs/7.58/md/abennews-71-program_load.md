  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-70_ehps.htm) →  [News for ABAP Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-71.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Lazy%20Loading%20of%20Programs%20in%20ABAP%20Release%207.0%2C%20EhP2%2C%20ABENNEWS-71-PROGRAM_LOAD%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

Lazy Loading of Programs in ABAP Release 7.0, EhP2

When compiling an ABAP program before ABAP release 7.0, EhP2, all associated include programs were loaded when first accessing a global class, a global interface, or a type pool. These includes contain declarations of the corresponding class, interface, or type pool which can be used globally.

From ABAP release 7.0, EhP2, these include programs are not loaded until an element declared in them is actually required. For example, a class class is no longer loaded when a TYPE REF TO class type reference is made, but when a component of the class is accessed or the class itself.

This internal optimization of ABAP Compiler has the following additional consequences:

[1\. Statement TYPE-POOLS is Obsolete](#!ABAP_MODIFICATION_1@1@)
[2\. Addition LOAD for CLASS and INTERFACE is Obsolete](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Statement TYPE-POOLS is Obsolete

The statement [TYPE-POOLS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype-pools.htm) is no longer required for the use of a data type, a constant, or a macro from a type pool. The elements of a type pool can now be addressed in the same way as all other objects in ABAP Dictionary without previously loading the type pool.

TYPE-POOLS statements are ignored by ABAP Compiler from ABAP release 7.0, EhP2, and can be deleted.

In list processing in particular, the include programs <LIST>, <SYMBOL>, <ICON>, <LINE>, and <COLOR> are no longer needed, since they only contain TYPE-POOLS statements.

Modification 2   

Addition LOAD for CLASS and INTERFACE is Obsolete

The now rarely used statements

-   [CLASS ... DEFINITION LOAD.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_interface_load.htm)
-   [INTERFACE ... LOAD.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_interface_load.htm)

are no longer required

From ABAP release 7.0, EhP2 these statements are ignored by ABAP Compiler and can be deleted.