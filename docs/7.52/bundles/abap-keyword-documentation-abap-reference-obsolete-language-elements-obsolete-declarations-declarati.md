# ABAP - Keyword Documentation / ABAP - Reference / Obsolete Language Elements / Obsolete Declarations / Declaration and Loading

Included pages: 4


### abenaddress_obsolet.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) → 

Declaration and Loading

-   [TYPE-POOLS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptype-pools.htm)

-   [CLASS, INTERFACE - LOAD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_interface_load.htm)

-   [FIELDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfields.htm)

Continue
[TYPE-POOLS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptype-pools.htm)
[CLASS, INTERFACE - LOAD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_interface_load.htm)
[FIELDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfields.htm)


### abaptype-pools.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) →  [Declaration and Loading](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaddress_obsolet.htm) → 

TYPE-POOLS

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptype-pools_shortref.htm)

Obsolete Syntax

TYPE-POOLS tpool.

Effect

This statement is obsolete. It is checked for accurate syntax but otherwise ignored by ABAP Compiler.

The statement TYPE-POOLS was required in the past to load the elements of a [type group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry") tpool explicitly in the current context. It can be specified for the global data declaration of an ABAP program or in the declaration part of a class or an interface.

Now a type group is loaded automatically when one of its elements is first accessed in a program.

Notes

-   After loading a type group, the data types declared there obscure data types of the same name in the ABAP Dictionary which are not declared in the type group. Previously the group was loaded explicitly using TYPE-POOLS. Since the statement TYPE-POOLS is now ignored, regular data types from ABAP Dictionary now obscure data types of the same name in a type group until the type group is loaded when accessing a non-obscured element. It has not been permitted to create types with identical names in ABAP Dictionary and in and in type groups for some time now, however, and this situation should therefore no longer arise.
    
-   Previously, [macros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmacro_glosry.htm "Glossary Entry") defined in type groups only obscured macros with the same names from the database table TRMAC once the type group had been loaded explicitly using the statement TYPE-POOLS. Now macros defined in type groups always obscure macros with the same name from the database table TRMAC. Due to various name conventions however, this situation should not arise.
    
-   The syntax check no longer checks whether the specified type group tpool actually exists.
    
-   The statement TYPE-POOLS can still be used to migrate current programs to lower releases. Otherwise it can be deleted.


### abapclass_interface_load.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) →  [Declaration and Loading](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaddress_obsolet.htm) → 

CLASS, INTERFACE - LOAD

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_deferred_load_shortref.htm)

Obsolete Syntax

CLASS class DEFINITION LOAD.
INTERFACE intf LOAD.

Effect

The variants of the statements [CLASS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass.htm) and [INTERFACE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface.htm) with the addition LOAD are obsolete. ABAP Compiler ignores these statements.

Previously, these statements were only required if the compilation of an ABAP program failed to contain recursive access to a global class or a global interface. These types of recursions are now avoided and a class or an interface is loaded automatically when a component is first accessed.

Note

These variants of the statements CLASS and INTERFACE can also be used in contexts other than the context described in [CLASS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass.htm) and [INTERFACE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface.htm).


### abapfields.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) →  [Declaration and Loading](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaddress_obsolet.htm) → 

FIELDS

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfields_shortref.htm)

Obsolete Syntax

FIELDS dobj.

Effect

This statement (forbidden in classes) addresses a data object dobj of the program. A warning from the extended program check can be avoided if the data object dobj is addressed in the program dynamically and not statically.

Note

This statement (forbidden in classes) is replaced by the [pragma](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpragma_glosry.htm "Glossary Entry") ##NEEDED.
