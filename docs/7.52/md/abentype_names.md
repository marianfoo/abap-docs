  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_and_objects.htm) →  [Types and Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_objects_oview.htm) → 

Absolute Type Names

The type name that can be used statically in ABAP statements is relative to its context, and is also known as the relative type name. As described in [Validity and Visibility](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlifetime_and_visibility.htm), local data types obscure more global data types of the same name. The same applies to classes and interfaces, which can also be interpreted as type definitions in this regard.

Absolute type names, however, name a type uniquely. An absolute type name as a path specifications is composed of the following components:

-   \\TYPE=name

-   \\CLASS=name

-   \\INTERFACE=name

-   \\PROGRAM=name

-   \\CLASS-POOL=name

-   \\FUNCTION-POOL=name

-   \\TYPE-POOL=name

-   \\METHOD=name

-   \\FORM=name

-   \\FUNCTION=name

The last component of a path must always be \\TYPE=name, \\CLASS=name, or \\INTERFACE=name. It describes a data type, a class, or an interface whose name name must be entered in uppercase letters. Absolute type names that only consist of \\TYPE=name, \\CLASS=name, or \\INTERFACE=name describe a data type from the ABAP Dictionary or a global class/interface of the class library. To create absolute type names for local data types, classes, and interfaces, use sequential component names that specify its context as prefixes.

Absolute type names can be used in all statements in which dynamic specification of a data type, a class, or an interface is possible. This makes it possible to stop a local type from obscuring a global type by specifying an absolute type name, and the absolute type names can be used to access the types, classes, and interfaces of other programs dynamically. It is possible to load a different program into the current [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") if this is necessary to access the program. Only the names of [compilation units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompilation_unit_glosry.htm "Glossary Entry") can be used for programs after \\PROGRAM. It is not possible to use the names of include programs, since they cannot be generated and loaded as standalone programs.

A data type is uniquely identified by its absolute type name. Various options exist, however, for forming an unique path for a type. For example, you can omit the function group for a type in a function module, because every function module is unique. If types are located in a [class pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_pool_glosry.htm "Glossary Entry") or function group, the technical name name of the ABAP program can also be specified. Since the latter is not known most of the time, we recommend using \\CLASS-POOL or \\FUNCTION-POOL instead.

A data type that only exists as a property of a data object does not have a relative type name. However, internally it has an absolute type name (technical type name) that uniquely defines the data type.

Notes

-   The type description classes of the [Run Time Type Services](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry") (RTTS), such as CL\_ABAP\_TYPEDESCR, contain methods that return the absolute type name of data types or data objects.

-   If an [absolute type name](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabsolute_typename_glosry.htm "Glossary Entry") is used in a program to specify a type of a different program, this program is added to a new [additional program group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadditional_prog_group_glosry.htm "Glossary Entry") or to the current [program group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_group_glosry.htm "Glossary Entry"), if not already loaded. The program constructor [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapload-of-program.htm) is not yet executed.

Example

When the methods m1 and m2 of the class c1 are called in the following example, the RTTS get the absolute type names \\TYPE=SPFLI or \\PROGRAM=RTTI\_TEST\\CLASS=C1\\METHOD=M2\\TYPE=SPFLI for the generically typed parameter p. The use of the name spfli has different meanings in the methods m1 and m2. A syntax check warning reminds you of this.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    METHODS: m1,
             m2,
             m3 IMPORTING p TYPE any.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    DATA struc TYPE spfli.
    m3( struc ).
  ENDMETHOD.
  METHOD m2.
    TYPES spfli TYPE spfli.
    DATA struc TYPE spfli.
    m3( struc ).
  ENDMETHOD.
  METHOD m3.
    DATA type\_descr TYPE REF TO cl\_abap\_typedescr.
    type\_descr = cl\_abap\_typedescr=>describe\_by\_data( p ).
    cl\_demo\_output=>write( type\_descr->absolute\_name ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DATA(ref) = new c1( ).
  ref->m1( ).
  ref->m2( ).
  cl\_demo\_output=>display( ).