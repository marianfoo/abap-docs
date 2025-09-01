# ABAP - Keyword Documentation / ABAP - Programming Language / Data Types and Data Objects / Absolute Type Names

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abentype_names.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_names.htm)
- [abenabs_type_names_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabs_type_names_abexa.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.58
**Generated**: 2025-09-01T11:25:28.949Z

---

### abentype_names.htm

> **📖 Official SAP Documentation**: [abentype_names.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_names.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abentype_names.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_names.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Absolute%20Type%20Names%2C%20ABENTYPE_NAMES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Absolute Type Names

Syntax Forms

Global Context

  \\TYPE=type\_ name*\[*\\LINE*\]**\[*\-comp*\]*
*|* \\CLASS=class\_name
*|* \\INTERFACE=intf\_name

Global Class/Interface Context

  \\clif\\TYPE=type\_ name*\[*\\LINE*\]**\[*\-comp*\]*

Program Context

  \\prog\\TYPE=type\_ name*\[*\\LINE*\]**\[*\-comp*\]*
*|* \\prog\\CLASS=class\_name
*|* \\prog\\INTERFACE=intf\_name

Local Class/Interface Context

  \\prog\\clif\\TYPE=type\_ name*\[*\\LINE*\]**\[*\-comp*\]*

Procedure Context

  \\clif\\meth\\TYPE=type\_ name*\[*\\LINE*\]**\[*\-comp*\]*
*|* \\prog\\clif\\meth\\TYPE=type\_ name*\[*\\LINE*\]**\[*\-comp*\]*
*|* \\prog\\proc\\TYPE=type\_ name*\[*\\LINE*\]**\[*\-comp*\]*

Alternatives:

[1\. Global Context](#!ABAP_ALTERNATIVE_1@1@)
[2\. Global Class/Interface Context](#!ABAP_ALTERNATIVE_2@2@)
[3\. Program Context](#!ABAP_ALTERNATIVE_3@3@)
[4\. Local Class/Interface Context](#!ABAP_ALTERNATIVE_4@4@)
[5\. Procedure Context](#!ABAP_ALTERNATIVE_5@5@)

Addition:

[... *\[*\\LINE*\]**\[*\-comp*\]*](#!ABAP_ONE_ADD@1@)

Effect

Absolute type names are [character strings](javascript:call_link\('abencharacter_string_glosry.htm'\) "Glossary Entry") that uniquely specify an user-defined [data type](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry") in its [context](javascript:call_link\('abenobj_context_glosry.htm'\) "Glossary Entry"). Absolute type names can be composed from scratch or obtained from [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry") and used in dynamic type specifications.

An absolute is composed of the following components that must form a path specification leading to a data type named type\_name, a class named class\_name or an interface named intf\_name:

-   \\TYPE=type\_name*\[*\\LINE*\]**\[*\-comp*\]*
    
    Specifies a [data type](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry") type\_name optionally followed by
    
    -   \\LINE to specify the [line type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry") of an [internal table](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") type
    -   \-comp to specify the data type of a [component](javascript:call_link\('abenstructure_component_glosry.htm'\) "Glossary Entry") of a [structured type](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry")
-   \\CLASS=class\_name
    
    Specifies a [class](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry") class\_name.
    
-   \\INTERFACE=intf\_name
    
    Specifies an [interface](javascript:call_link\('abenoo_intf_glosry.htm'\) "Glossary Entry") intf\_name.
    
-   \\TYPE-POOL=tp\_name
    
    Specifies a [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") tp\_name.
    
-   \\PROGRAM=prog\_name
    
    Specifies an [ABAP program](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry") prog\_name.
    
-   \\CLASS-POOL=class\_name
    
    Specifies the [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") of a class class\_name.
    
-   \\FUNCTION-POOL=fp\_name
    
    Specifies a [function pool](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry") fp\_name.
    
-   \\METHOD=meth\_name
    
    Specifies a [method](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") meth\_name.
    
-   \\FUNCTION=func\_name
    
    Specifies a [function module](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") func\_name.
    
-   \\FORM=subr\_name
    
    Specifies a [subroutine](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry") subr\_name.
    

The last component of a path must always be one of the following:

-   \\TYPE=type\_name*\[*\\LINE*\]**\[*\-comp*\]*
-   \\CLASS=class\_name
-   \\INTERFACE=intf\_name

The following sections explain the usage of these components for composing path expressions for different contexts.

Absolute type names can be used in all statements in which dynamic specification of a data type, a class, or an interface is possible. The case sensitivity depends on the statement.

Hints

-   Absolute type names provide an alternative to the regular type names that can be used statically in ABAP statements for user-defined (i.e. not built-in) types. Those type names are [relative type names](javascript:call_link\('abenrelative_type_name_glosry.htm'\) "Glossary Entry") that are only valid in relation to their context. For example, a type name my\_type defined with TYPES in a context can be only be used within this context to address the respective type. The same applies to classes and interfaces. Refer also to [Validity and Visibility](javascript:call_link\('abenlifetime_and_visibility.htm'\)).
-   Usage types for absolute type names are:
    -   Access to global types that are hidden by local types
    -   Access to data types, classes, and interfaces of other programs. When a different program is accessed, it is loaded into the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") if required.
-   A data type is uniquely identified by its absolute type name. However, there are different ways of forming a unique path for a type.
-   A data type that only exists as a [bound data type](javascript:call_link\('abenbound_data_type_glosry.htm'\) "Glossary Entry") of a data object and, therefore, does not have a relative type name, has an internal [technical type name](javascript:call_link\('abentechnical_type_name_glosry.htm'\) "Glossary Entry"). Such a technical type name can also be part of an absolute type and can be retrieved by [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry").

Example

Composing an absolute type name for a data type defined in a method of a local class. The type name is used for creating an anonymous data object. The absolute type name of the anonymous data object retrieved by [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry") is \\PROGRAM=...\\CLASS=CLS\\METHOD=METH\\TYPE=C100 and matches the composed one.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    METHODS meth.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    TYPES c100 TYPE c LENGTH 100.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new( ).
    DATA dref TYPE REF TO data.
    DATA(type\_name) =
      \`\\PROGRAM=\` && sy-repid &&
      \`\\CLASS=cls\` &&
      \`\\METHOD=meth\` &&
      \`\\TYPE=c100\`.
    TRY.
        CREATE DATA dref TYPE (type\_name).
        dref->\* = 'Success'.
        out->write( dref ).
      CATCH cx\_sy\_create\_data\_error INTO DATA(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
    out->write(
      cl\_abap\_typedescr=>describe\_by\_data( dref->\* )->absolute\_name ).
    out->display( ).
  ENDMETHOD.
ENDCLASS.

Example

When the methods m1 and m2 of the class c1 are called in the following example, the RTTS return the absolute type names \\TYPE=SPFLI or \\PROGRAM=...\\CLASS=CLS\\METHOD=M2\\TYPE=SPFLI for the generically typed parameter p. The use of the name spfli has a different meaning in the methods m1 and m2. This is also indicated by a syntax check warning.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    METHODS: m1,
      m2,
      m3 IMPORTING p TYPE any.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD m1.
    DATA struc TYPE spfli.
    m3( struc ).
  ENDMETHOD.
  METHOD m2.
    TYPES spfli TYPE spfli ##SHADOW\[SPFLI\].
    DATA struc TYPE spfli.
    m3( struc ).
  ENDMETHOD.
  METHOD m3.
    DATA type\_descr TYPE REF TO cl\_abap\_typedescr.
    type\_descr = cl\_abap\_typedescr=>describe\_by\_data( p ).
    cl\_demo\_output=>write( type\_descr->absolute\_name ).
  ENDMETHOD.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(ref) = NEW cls( ).
    ref->m1( ).
    ref->m2( ).
    cl\_demo\_output=>display( ).
  ENDMETHOD.
ENDCLASS.

Alternative 1   

  \\TYPE=type\_name*\[*\\LINE*\]**\[*\-comp*\]*
*|* \\CLASS=class\_name
*|* \\INTERFACE=intf\_name

Effect

Absolute type names for a

-   data type type\_name from the ABAP Dictionary or ABAP CDS
-   global class class\_name from the class library
-   global interface intf\_name from the class library

The path consists of one component only.

Example

The absolute type names of global types are retrieved with [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry"). The output is

\\TYPE=SCARR
\\TYPE=DEMO\_CDS\_NULL
\\CLASS=CL\_ABAP\_DOCU
\\INTERFACE=IF\_ABAP\_DOCU

FINAL(out)  = cl\_demo\_output=>new( ).
out->write( cl\_abap\_typedescr=>describe\_by\_name( 'SCARR'
             )->absolute\_name
  )->write( cl\_abap\_typedescr=>describe\_by\_name( 'DEMO\_CDS\_NULL'
             )->absolute\_name
  )->write( cl\_abap\_typedescr=>describe\_by\_name( 'CL\_ABAP\_DOCU'
             )->absolute\_name
  )->write( cl\_abap\_typedescr=>describe\_by\_name( 'IF\_ABAP\_DOCU'
             )->absolute\_name ).
out->display( ).

Alternative 2   

\\clif\\TYPE=type\_ name*\[*\\LINE*\]**\[*\-comp*\]*

Effect

Absolute type name for a data type type\_name defined in a global class or a global interface. \\clif must be one of the following:

-   \\CLASS=class\_name, name of the global class
-   \\INTERFACE=intf\_name, name of the global interface

Example

The absolute type names of types defined in an interface and a class are retrieved with [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry"). The output is

\\INTERFACE=IF\_DEMO\_INTERFACE\_POOL\\TYPE=CHAR20
\\CLASS=CL\_DEMO\_CLASS\_POOL\\TYPE=CHAR20

FINAL(out)  = cl\_demo\_output=>new( ).
DATA:
  text1 TYPE if\_demo\_interface\_pool=>char20,
  text2 TYPE cl\_demo\_class\_pool=>char20.
out->write(
  cl\_abap\_typedescr=>describe\_by\_data( text1
    )->absolute\_name
  )->write(
  cl\_abap\_typedescr=>describe\_by\_data( text2
      )->absolute\_name ).
out->display( ).

Alternative 3   

  \\prog\\TYPE=type\_ name*\[*\\LINE*\]**\[*\-comp*\]*
*|* \\prog\\CLASS=class\_name
*|* \\prog\\INTERFACE=intf\_name

Effect

Absolute type name for a class class\_name, an interface intf\_name or data type type\_name defined in the [global declaration part](javascript:call_link\('abenglobal_declaration_sect_glosry.htm'\) "Glossary Entry") of a program. \\prog must be one of the following:

-   \\PROGRAM=prog\_name
    
    For prog\_name, any technical program name (from table TRDIR) that denotes a [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry") can be used. The names of [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") cannot be used.
    
-   \\CLASS-POOL=class\_name
    
    For class\_name, any global class can be used. The specified program is the [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") of that class. The local classes, interfaces and data types as well as the global class of the class pool can be specified.
    
-   \\FUNCTION-POOL=fp\_name
    
    For fp\_name, any [function pool](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry") (without the prefix SAPL) can be used.
    
-   \\TYPE-POOL=tp\_name,
    
    For tp\_name, any [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") can be used.
    

Hints

-   For classes, interfaces and data types in a [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") or [function pool](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry"), besides class\_name or \\fp\_name also the technical name prog\_name of the ABAP program can be specified behind \\PROGRAM. Since the latter is usually not known, it is recommended that \\CLASS-POOL or \\FUNCTION-POOL are used.
-   Since an [interface pool](javascript:call_link\('abeninterface_pool_glosry.htm'\) "Glossary Entry") cannot contain definitions outside its global interface, it cannot be specified by \\INTERFCACE-POOL. In order to address the global interface and its components, \\INTERFACE can be used. The technical name of the interface pool can be used behind \\PROGRAM, but that is not recommended.
-   It is not allowed to access [test classes](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") with absolute type names.
-   If an [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry") is used in a program to specify a type of a different program, this program is added to a new [additional program group](javascript:call_link\('abenadditional_prog_group_glosry.htm'\) "Glossary Entry") or to the current [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry") depending on the program type, if it has not yet been loaded. The program constructor [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) is not executed.

Example

Both absolute type names denote the type char10 defined in the [CCDEF include](javascript:call_link\('abenccdef_glosry.htm'\) "Glossary Entry") of the global class CL\_DEMO\_CLASS\_POOL.

-   The first one uses \\CLASS\_POOL with the name of the global class.
-   The second one uses \\PROGRAM with the technical name of the class pool.

The [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry") method returns a path with \\CLASS\_POOL in both cases.

FINAL(out) = cl\_demo\_output=>new( ).
DATA dref TYPE REF TO data.
DATA(type\_name) = \`\\CLASS-POOL=cl\_demo\_class\_pool\\TYPE=char10\`.
CREATE DATA dref TYPE (type\_name).
out->write(
cl\_abap\_typedescr=>describe\_by\_data(
  dref->\* )->absolute\_name ).
type\_name = \`\\PROGRAM=cl\_demo\_class\_pool============cp\\TYPE=char10\`.
CREATE DATA dref TYPE (type\_name).
out->write(
cl\_abap\_typedescr=>describe\_by\_data(
  dref->\* )->absolute\_name ).
out->display( ).

Alternative 4   

\\prog\\clif\\TYPE=type\_ name*\[*\\LINE*\]**\[*\-comp*\]*

Effect

Absolute type name for a data type type\_name defined in a local class or interface of a program. The same applies to \\prog as in the previous alternative (except \\TYPE-POOL). \\clif must be one of the following:

-   \\CLASS=class\_name, name of the local class
-   \\INTERFACE=intf\_name, name of local interface

Example

Absolute type names are used

-   to create an anonymous data object with a type defined in a local class demo of the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of the global class,
-   to create an object of that local class.

The method meth of that class is called dynamically, where the anonymous data object serves as an actual parameter with the correct type. Note the different case sensitivity when creating data objects and instances of classes.

The absolute type name for the [test class](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") TEST\_DEMO of the class pool cannot be used for creating an object. Instead, an exception is raised.

FINAL(out) = cl\_demo\_output=>new( ).
DATA dref TYPE REF TO data.
DATA oref TYPE REF TO object.
FINAL(type\_name) =
  \`\\CLASS-POOL=cl\_demo\_class\_pool\\CLASS=DEMO\\TYPE=char30\`.
CREATE DATA dref TYPE (type\_name).
DATA(class\_name) =
  \`\\CLASS-POOL=CL\_DEMO\_CLASS\_POOL\\CLASS=DEMO\`.
CREATE OBJECT oref TYPE (class\_name).
CALL METHOD oref->('METH')
  RECEIVING
    text = dref->\*.
out->write( dref->\* ).
TRY.
    class\_name =
      \`\\CLASS-POOL=CL\_DEMO\_CLASS\_POOL\\CLASS=TEST\_DEMO\`.
    CREATE OBJECT oref TYPE (class\_name).
  CATCH cx\_sy\_create\_object\_error INTO FINAL(exc).
    out->write( exc->get\_text( ) ).
ENDTRY.
out->display( ).

Alternative 5   

  \\clif\\meth\\TYPE=type\_ name*\[*\\LINE*\]**\[*\-comp*\]*
*|* \\prog\\clif\\meth\\TYPE=type\_ name*\[*\\LINE*\]**\[*\-comp*\]*
*|* \\prog\\proc\\TYPE=type\_ name*\[*\\LINE*\]**\[*\-comp*\]*

Effect

Absolute type name for a data type type\_name defined in a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry").

-   \\clif\\meth specifies a method in a global class or interface. The same applies to \\clif as for the respective alternative. \\meth must be:
    -   \\METHOD=meth\_name
-   \\prog\\clif\\meth specifies a method in a local class or interface. The same applies to prog\\clif as for the respective alternative. \\meth must be:
    -   \\METHOD=meth\_name
-   \\prog\\proc specifies a function module or subroutine defined in a program.
    
    \\prog can be one of the following:
    
    -   \\PROGRAM=prog\_name
    -   \\FUNCTION-POOL=fp\_name
    
    \\proc can be one of the following:
    
    -   \\FUNCTION=func\_name
    -   \\FORM=subr\_name

The specification of a function pool for a type in function module can be omitted because each function module is unique.

Example

Absolute type names for types defined in methods. The first method is a component of the global class CL\_DEMO\_CLASS\_POOL. The second method is a component of a local class defined in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of its class pool.

FINAL(out) = cl\_demo\_output=>new( ).
DATA dref TYPE REF TO data.
DATA(type\_name) = \`\\CLASS=cl\_demo\_class\_pool\\METHOD=meth\\TYPE=char10\`.
CREATE DATA dref TYPE (type\_name).
out->write(
cl\_abap\_typedescr=>describe\_by\_data(
  dref->\* )->absolute\_name ).
type\_name =
  \`\\CLASS-POOL=cl\_demo\_class\_pool\\CLASS=demo\\METHOD=meth\\TYPE=char16\`.
CREATE DATA dref TYPE (type\_name).
out->write(
cl\_abap\_typedescr=>describe\_by\_data(
  dref->\* )->absolute\_name ).
out->display( ).

Addition   

... *\[*\\LINE*\]**\[*\-comp*\]*

Effect

If a path is terminated with \\TYPE=type\_name, the [line type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry") of an internal table type or the data type of a component of a structured type can be specified as follows:

-   \\LINE
    
    If the data type denoted by type\_name is an [internal table](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") type, its [line type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry") can be specified by \\LINE.
    
-   \-comp
    
    If the data type denoted by type\_name or the line type denoted by \\LINE is structured, the type of one of its components can be specified by \-comp where comp is the component name.
    

\\LINE and \-comp cannot be used behind [technical type names](javascript:call_link\('abentechnical_type_name_glosry.htm'\) "Glossary Entry") of data types that only exist as a [bound data type](javascript:call_link\('abenbound_data_type_glosry.htm'\) "Glossary Entry") of a data object.

Hint

The specification \\LINE is more like a component selector than a component of the path. It does not precede \=type\_name but follows it in the same way as the structure component selector \-comp.

Example

Using the type names of structured and tabular data objects to compose absolute type names for a structure component and a table line. While the absolute names retrieved from data objects struc and itab1 contain the complete types struc and itab1 of the program, the absolute name retrieved from itab2 contains the [technical type name](javascript:call_link\('abentechnical_type_name_glosry.htm'\) "Glossary Entry") of that internal table. Since the data type itab2 is generic (no key definition), a complete type with the standard key is constructed with the DATA statement as a [bound data type](javascript:call_link\('abenbound_data_type_glosry.htm'\) "Glossary Entry"). Its technical type name cannot be used with \\LINE and an exception is raised.

FINAL(out) = cl\_demo\_output=>new( ).
TYPES struc TYPE scarr.
TYPES itab1 TYPE TABLE OF scarr WITH EMPTY KEY.
TYPES itab2 TYPE TABLE OF scarr.
DATA struc TYPE struc.
DATA itab1 TYPE itab1.
DATA itab2 TYPE itab2.
DATA dref TYPE REF TO data.
FINAL(comp\_type) =
  cl\_abap\_typedescr=>describe\_by\_data( struc
    )->absolute\_name && '-carrid'.
TRY.
    CREATE DATA dref TYPE (comp\_type).
    out->write( 'Data object with type of component created' ).
  CATCH cx\_sy\_create\_data\_error INTO DATA(exc).
    out->write( exc->get\_text( ) ).
ENDTRY.
FINAL(line\_type1) =
  cl\_abap\_typedescr=>describe\_by\_data( itab1
    )->absolute\_name && '\\LINE'.
TRY.
    CREATE DATA dref TYPE (line\_type1).
    out->write( 'Data object with type of table line created' ).
  CATCH cx\_sy\_create\_data\_error INTO exc.
    out->write( exc->get\_text( ) ).
ENDTRY.
FINAL(line\_type2) =
  cl\_abap\_typedescr=>describe\_by\_data( itab2
    )->absolute\_name && '\\LINE'.
TRY.
    CREATE DATA dref TYPE (line\_type2).
    out->write( 'Data object with type of table line created' ).
  CATCH cx\_sy\_create\_data\_error INTO exc.
    out->write( exc->get\_text( ) ).
ENDTRY.
out->display( ).

Executable Example

[Absolute Type Names](javascript:call_link\('abenabs_type_names_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Absolute Type Names, Executable Example](javascript:call_link\('abenabs_type_names_abexa.htm'\))



**📖 Source**: [abentype_names.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_names.htm)

### abenabs_type_names_abexa.htm

> **📖 Official SAP Documentation**: [abenabs_type_names_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabs_type_names_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenabs_type_names_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabs_type_names_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenabs_type_names_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabs_type_names_abexa.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Absolute Type Names](javascript:call_link\('abentype_names.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Absolute%20Type%20Names%2C%20Executable%20Example%2C%20ABENABS_TYPE_NAMES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

Absolute Type Names, Executable Example

This example demonstrates the composition of [absolute type names](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_absolute\_type\_names DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
        REDEFINITION .
  PRIVATE SECTION.
    TYPES struc TYPE scarr.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_absolute\_type\_names IMPLEMENTATION.
  METHOD main.
    TYPES itab  TYPE TABLE OF scarr.
    DATA dref TYPE REF TO data.
    DATA(struc\_type) =
      \`\\class=cl\_demo\_absolute\_type\_names\` &&
      \`\\type=struc\`.
    TRY.
        CREATE DATA dref TYPE (struc\_type).
        dref->\* =  VALUE scarr( carrid = 'CC' ).
        out->write( dref ).
      CATCH cx\_sy\_create\_data\_error INTO DATA(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
    DATA(comp\_type) =
      \`\\class=cl\_demo\_absolute\_type\_names\` &&
      \`\\type=struc-carrid\`.
    TRY.
        CREATE DATA dref TYPE (comp\_type).
        dref->\* =  'XX'.
        out->write( dref ).
      CATCH cx\_sy\_create\_data\_error INTO exc.
        out->write( exc->get\_text( ) ).
    ENDTRY.
    DATA(line\_type) =
      \`\\class=cl\_demo\_absolute\_type\_names\` &&
      \`\\method=main\\type=itab\\line\`.
    TRY.
        CREATE DATA dref TYPE (line\_type).
        dref->\* = VALUE scarr( carrid = 'YY' ).
        out->write( dref ).
      CATCH cx\_sy\_create\_data\_error INTO exc.
        out->write( exc->get\_text( ) ).
    ENDTRY.
    comp\_type =
      \`\\class=cl\_demo\_absolute\_type\_names\` &&
      \`\\method=main\\type=itab\\line-carrid\`.
    TRY.
        CREATE DATA dref TYPE (comp\_type).
        dref->\* =  'ZZ'.
        out->write( dref ).
      CATCH cx\_sy\_create\_data\_error INTO exc.
        out->write( exc->get\_text( ) ).
    ENDTRY.
    comp\_type =
      \`\\type=spfli-carrid\`.
    TRY.
        CREATE DATA dref TYPE (comp\_type).
        dref->\* =  'DDX'.
        out->write( dref ).
      CATCH cx\_sy\_create\_data\_error INTO exc.
        out->write( exc->get\_text( ) ).
    ENDTRY.
    line\_type =
      \`\\type=spfli\_key\_tab\\line\`.
    TRY.
        CREATE DATA dref TYPE (line\_type).
        dref->\* = VALUE spfli( carrid = 'DDY' ).
        out->write( dref ).
      CATCH cx\_sy\_create\_data\_error INTO exc.
        out->write( exc->get\_text( ) ).
    ENDTRY.
    comp\_type =
      \`\\type=spfli\_key\_tab\\line-carrid\`.
    TRY.
        CREATE DATA dref TYPE (comp\_type).
        dref->\* =  'DDZ'.
        out->write( dref ).
      CATCH cx\_sy\_create\_data\_error INTO exc.
        out->write( exc->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

The following absolute type names are composed and used for creating [anonymous data objects](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry") with dynamic type specifications:

-   \\class=cl\_demo\_absolute\_type\_names\\type=struc
    
    Specifies the structured type struc of class CL\_DEMO\_ABSOLUTE\_TYPE\_NAMES.
    
-   \\class=cl\_demo\_absolute\_type\_names\\type=struc-carrid
    
    Specifies the type of the component carrid of the structured type struc of class CL\_DEMO\_ABSOLUTE\_TYPE\_NAMES.
    
-   \\class=cl\_demo\_absolute\_type\_names\\method=main\\type=itab\\line
    
    Specifies the line type of the tabular type itab defined in method MAIN of class CL\_DEMO\_ABSOLUTE\_TYPE\_NAMES.
    
-   \\class=cl\_demo\_absolute\_type\_names\\method=main\\type=itab\\line-carrrid
    
    Specifies the type of the component carrid of the tabular type itab defined in method MAIN of class CL\_DEMO\_ABSOLUTE\_TYPE\_NAMES.
    
-   \\type=spfli-carrid
    
    Specifies the type of the component carrid of the [DDIC structure](javascript:call_link\('abenddic_structure_glosry.htm'\) "Glossary Entry") SPFLI.
    
-   \\type=spfli\_key\_tab\\line
    
    Specifies the line type of the [DDIC table type](javascript:call_link\('abenddic_table_type_glosry.htm'\) "Glossary Entry") SPFLI\_KEY\_TAB.
    
-   \\type=spfli\_key\_tab\\line-carrid
    
    Specifies the type of the component carrid of the line type of the [DDIC table type](javascript:call_link\('abenddic_table_type_glosry.htm'\) "Glossary Entry") SPFLI\_KEY\_TAB.
