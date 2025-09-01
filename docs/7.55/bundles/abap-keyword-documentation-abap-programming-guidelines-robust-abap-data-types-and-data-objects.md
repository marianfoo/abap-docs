# ABAP - Keyword Documentation / ABAP - Programming Guidelines / Robust ABAP / Data Types and Data Objects

Included pages: 13



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abendata_type_obj_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_type_obj_guidl.htm)
- [abenbound_independent_dtype_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbound_independent_dtype_guidl.htm)
- [abendeclaration_dtypes_const_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_dtypes_const_guidl.htm)
- [abendeclaration_variables_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_variables_guidl.htm)
- [abendeclaration_inline_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_inline_guidl.htm)
- [abenincluding_structures_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenincluding_structures_guidl.htm)
- [abenusing_types_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenusing_types_guidl.htm)
- [abenref_types_objects_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenref_types_objects_guidl.htm)
- [abentable_work_area_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_work_area_guidl.htm)
- [abenliterals_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenliterals_guidl.htm)
- [abenstrings_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstrings_guidl.htm)
- [abenstart_values_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstart_values_guidl.htm)
- [abendataobjects_true_value_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendataobjects_true_value_guidl.htm)

**Bundle Contains**: 13 documentation pages
**Version**: ABAP 7.55
**Generated**: 2025-09-01T11:25:45.694Z

---

### abendata_type_obj_guidl.htm

> **📖 Official SAP Documentation**: [abendata_type_obj_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_type_obj_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) → 

Data Types and Data Objects

Together with classes and objects, data types and data objects are the essentials of ABAP programming.

-   Data type

A data type describes a data object, just as a class describes an object. In this sense, a data type is comparable with a class without methods. ABAP interprets the content of a data object in accordance with its data type. Data types exist either as attributes bound to data objects or as standalone data objects. Standalone data types can be defined either in ABAP Dictionary or using the statement TYPES in an ABAP program.

-   Data object

A data object is an instance of a data type, just as an object is an instance of a class. It exists in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of an ABAP program or as a shared object in the shared memory and occupies memory there for the contained data. A data object is created either implicitly when a program or procedure is loaded (named data object), or by using the statement CREATE DATA (anonymous data object). Named data objects are either variables (statements DATA, CLASS-DATA, and so on) or constants (statement CONSTANTS).

A data type describes the technical attributes of a data object (for example, the elementary types it is comprised of, its length) and semantic attributes (what type of entity is represented by the data object). Types that are defined in ABAP dictionary have additional attributes, for example for input/output on a classic dynpro or in Web Dynpro.

As far as the ABAP runtime environment is concerned, only the technical attributes of a data object are of interest for program execution. However, the semantic information, which is linked to the appropriate use of types, is essential for the legibility of the source code. For this reason, some of the rules covered in this section could also fall under the heading [Structure and Style](javascript:call_link\('abenstructure_style_guidl.htm'\) "Guideline"), since this covers not only robustness, but also good style, which, although it does not affect program execution, is nevertheless significant for readability and maintainability.

-   [Bound and Standalone Data Types](javascript:call_link\('abenbound_independent_dtype_guidl.htm'\) "Guideline")

-   [Declaration of Data Types and Constants](javascript:call_link\('abendeclaration_dtypes_const_guidl.htm'\) "Guideline")

-   [Declaration of Variables](javascript:call_link\('abendeclaration_variables_guidl.htm'\) "Guideline")

-   [Inline Declarations](javascript:call_link\('abendeclaration_inline_guidl.htm'\) "Guideline")

-   [Including Structures](javascript:call_link\('abenincluding_structures_guidl.htm'\) "Guideline")

-   [Using Types](javascript:call_link\('abenusing_types_guidl.htm'\) "Guideline")

-   [Reference to Data Types or Data Objects](javascript:call_link\('abenref_types_objects_guidl.htm'\) "Guideline")

-   [Table Work Areas](javascript:call_link\('abentable_work_area_guidl.htm'\) "Guideline")

-   [Literals](javascript:call_link\('abenliterals_guidl.htm'\) "Guideline")

-   [Strings](javascript:call_link\('abenstrings_guidl.htm'\) "Guideline")

-   [Start Values](javascript:call_link\('abenstart_values_guidl.htm'\) "Guideline")

-   [Data Objects for Truth Values](javascript:call_link\('abendataobjects_true_value_guidl.htm'\) "Guideline")

Continue
[Bound and Standalone Data Types](javascript:call_link\('abenbound_independent_dtype_guidl.htm'\))
[Declaration of Data Types and Constants](javascript:call_link\('abendeclaration_dtypes_const_guidl.htm'\))
[Declaration of Variables](javascript:call_link\('abendeclaration_variables_guidl.htm'\))
[Inline Declarations](javascript:call_link\('abendeclaration_inline_guidl.htm'\))
[Including Structures](javascript:call_link\('abenincluding_structures_guidl.htm'\))
[Using Types](javascript:call_link\('abenusing_types_guidl.htm'\))
[Reference to Data Types or Data Objects](javascript:call_link\('abenref_types_objects_guidl.htm'\))
[Table Work Areas](javascript:call_link\('abentable_work_area_guidl.htm'\))
[Literals](javascript:call_link\('abenliterals_guidl.htm'\))
[Strings](javascript:call_link\('abenstrings_guidl.htm'\))
[Start Values](javascript:call_link\('abenstart_values_guidl.htm'\))
[Data Objects for Truth Values](javascript:call_link\('abendataobjects_true_value_guidl.htm'\))



**📖 Source**: [abendata_type_obj_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_type_obj_guidl.htm)

### abenbound_independent_dtype_guidl.htm

> **📖 Official SAP Documentation**: [abenbound_independent_dtype_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbound_independent_dtype_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abendata_type_obj_guidl.htm'\)) → 

Bound and Standalone Data Types

Background

A bound data type only exists as an attribute of a data object. It is created when a data object is not declared using a reference to a standalone data type that defines all technical attributes, but when technical attributes are defined in the statement DATA instead. Here DATA is used as a synonym for all statements that declare data objects. The resulting type is an attribute of the declared variable and it is bound to this variable. If this type is needed in several different places, it has to be defined separately for each place where it is used.

A standalone data type is declared in the ABAP Dictionary or using the statement TYPES and defines all technical attributes of a data object with one exception: When table types are defined, they can be generic with respect to the keys specified. A standalone generic type can only be used for typing but not for data declarations. However, there is one exception: In a DATA statement, the standard key is added to the generic standard table type.

Rule

Use standalone data types

Use standalone data types instead of constructing bound data types when declaring data objects.

Details

Here is a list of reasons that support the declaration of standalone types:

-   The declaration of a standalone data type allows multiple data objects (or interface parameters or field symbols) to use a type without the need to always redefine this type.

-   Even if only one data object of this type is required initially, it is very likely that further data objects will be added during the course of the development. If the type needs to be adapted later on, you can do this centrally.

-   Declaring a standalone type and using it to declare a data object is nothing more than following the rule for the [SoC principle](javascript:call_link\('abenseperation_concerns_guidl.htm'\) "Guideline").

The data type should always have a specific meaning and a meaningful [name](javascript:call_link\('abennaming_guidl.htm'\) "Guideline"). This gives data types a clear semantic meaning and makes the program easier to read and understand. Therefore, you should declare different data types for technically identical but semantically different data objects. This also increases the probability that a type can be adapted later on without making major program changes.

Therefore you should avoid declaring purely technical data types that cannot be associated with specific semantics, because this does not make it easier to read or enhance the program.

Hint

A separate [rule](javascript:call_link\('abendeclaration_dtypes_const_guidl.htm'\) "Guideline") specifies where the standalone data types should be declared.

Bad Example

The following source code shows the declaration of two data objects that are supposed to have the same data type. However, the technical attributes, length, and number of decimal places are defined as standalone, bound data types in the DATA statements in question.

...
DATA number\_1 TYPE p LENGTH 6 DECIMALS 2.
DATA number\_2 TYPE p LENGTH 6 DECIMALS 2.
...

Good Example

The following source code moves the definition of the technical attributes of the data objects in the above example to a separate TYPES statement. The standalone data type is only declared once and can then be used multiple times.

TYPES number\_type TYPE p LENGTH 6 DECIMALS 2.
...
DATA: number\_1 TYPE number\_type,
      number\_2 TYPE number\_type.
...



**📖 Source**: [abenbound_independent_dtype_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbound_independent_dtype_guidl.htm)

### abendeclaration_dtypes_const_guidl.htm

> **📖 Official SAP Documentation**: [abendeclaration_dtypes_const_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_dtypes_const_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abendata_type_obj_guidl.htm'\)) → 

Declaration of Data Types and Constants

Background

Data types and constants can be declared in the following contexts:

-   Cross-program

-   in the ABAP Dictionary

-   in global classes and interfaces

-   in type pools

-   Local program

-   in the global declaration part of a program

-   in global classes and interfaces

-   in procedures ([Methods](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline"))

Technically speaking, type pools, global classes and interfaces are also ABAP programs, in which data types and constants are created using the TYPES and CONSTANTS statements. In contrast to other ABAP programs, the declarations can also be statically visible in other programs, depending on the visibility section. Absolute type names enable you to dynamically access the types of all programs.

Rule

Declare data types and constants in the appropriate context

Declare data types and constants in the context that guarantees the best possible encapsulation.

Details

Data types and constants should be declared in the context in which they are [visible](javascript:call_link\('abenencapsulation_guidl.htm'\) "Guideline") for all potential consumers but not anywhere else:

-   Local program data types and constants

-   Data types that are only required by local data objects (usually helper variables) or constants that are only required in a procedure ([method](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline")) should be declared as local data types or constants.

-   Data types and constants that are only required within local classes should be declared in the corresponding visibility section of the classes or integrated using an interface.

-   If data types are required in multiple local classes and interfaces of a program, they should be created in the appropriate visibility section of a local class or an interface. Local classes or interfaces can be used that contain nothing else apart from these types or constants. In the global declaration part of programs, declarations of data types or constants are not required for semantic reasons.

-   Cross-program data types and constants

-   Data types and constants that a consumer requires to use a class or interface should be declared in the public visibility section of the global class or interface. Examples include data types used to type interface parameters of methods, and constants expected as actual parameters by methods, such as IDs of [exception texts](javascript:call_link\('abenexception_texts_guidl.htm'\) "Guideline") in exception classes.

-   Data types required by different programs, classes, or interfaces are declared as real types of the ABAP Dictionary (not in type pools). These are usually semantically independent types, for which the ABAP Dictionary provides additional services, such as descriptive texts and documentation options. In this context, you must consider the [separation of concerns](javascript:call_link\('abenseperation_concerns_guidl.htm'\) "Guideline").
    For example, a structure of the ABAP Dictionary should never be used to type (Web) Dynpro fields and to simultaneously define a database table. Ideally, data types should be declared in encapsulated packages, which manage the cross-package use of their repository objects and which only expose types actually required outside the package in their package interfaces.
    You should generally avoid declaring or even exposing purely technical types without semantic meaning, in application development packages of the ABAP Dictionary. The declaration of these types (such as INT2 or CHAR10) should be restricted to fundamental basis packages.

-   You should not create any new type pools. Data types should be declared in global classes or interfaces, or as real types of the ABAP Dictionary. You should only create constants in global classes or interfaces. However, the use of existing type pools is still [allowed](javascript:call_link\('abendataobjects_true_value_guidl.htm'\) "Guideline"). It is no longer necessary to load type pools explicitly using the TYPE-POOLS statement. However, you only need to declare new types or constants in a context, if no [semantically appropriate](javascript:call_link\('abenusing_types_guidl.htm'\) "Guideline") types or constants exist that are more global. For example, if an appropriate ABAP Dictionary data type exists, it is not necessary to create a local data type in the class, to type an interface parameter of a global class method. In this case, the data type in the ABAP Dictionary might have to be published in the same package interface as the class. This would also be the case, however, if an interface parameter is typed with a data type of the class that refers to an ABAP Dictionary data type.

Note

The misuse of include programs for the declaration of data types and data objects that can be reused across various programs is [not allowed](javascript:call_link\('abenmultiple_use_include_guidl.htm'\) "Guideline").

Bad Example

The following source code shows the declaration of constants in a type pool that are required across different programs. The name of the type pool must precede the names of the constants as a prefix. You should not create any new [type pools](javascript:call_link\('abenprogram_type_guidl.htm'\) "Guideline"). For constants that are required in various different programs, the above rule recommends a declaration in global classes or interfaces.

TYPE-POOL zicon.
  TYPES zicon\_icon TYPE ...
  CONSTANTS:
    zicon\_cancel      TYPE zicon\_icon VALUE icon\_cancel,
    zicon\_check       TYPE zicon\_icon VALUE icon\_check,
    zicon\_check\_words TYPE zicon\_icon VALUE icon\_intensify,
    zicon\_document    TYPE zicon\_icon VALUE icon\_hlp,
    zicon\_download    TYPE zicon\_icon VALUE icon\_export,
    ...

Good Example

The following source code illustrates the declaration of the constants in the above example in a global class. The visibility of the constants is restricted to the current package. In other programs, the constants are addressed using cl\_...\_icons=>.

CLASS cl\_...\_icons DEFINITION PUBLIC FINAL.
  PUBLIC SECTION.
    TYPES  icon TYPE ...
    CONSTANTS cancel      TYPE icon VALUE icon\_cancel.
    CONSTANTS check       TYPE icon VALUE icon\_check.
    CONSTANTS check\_words TYPE icon VALUE icon\_intensify.
    CONSTANTS document    TYPE icon VALUE icon\_hlp.
    CONSTANTS download    TYPE icon VALUE icon\_export.
    ...
ENDCLASS.



**📖 Source**: [abendeclaration_dtypes_const_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_dtypes_const_guidl.htm)

### abendeclaration_variables_guidl.htm

> **📖 Official SAP Documentation**: [abendeclaration_variables_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_variables_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abendata_type_obj_guidl.htm'\)) → 

Declaration of Variables

Background

Variables can be declared in the following contexts:

-   As attributes of global classes and interfaces across programs

-   Locally in the program

-   in the global declaration part of a program

-   as attributes of local classes and interfaces

-   in procedures ([Methods](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline"))

Variables that are declared within most of the event blocks or dialog modules as well as between completed processing blocks also belong to the global declaration part of a program, but violate the rule [implement global declarations centrally](javascript:call_link\('abenglobal_declar_guidl.htm'\) "Guideline").

Program-local variables that are declared in the global declaration part of a program are generally referred to as global variables.

Rule

Do not declare global variables

Do not declare variables in the global declaration part of a program. Variables may only be declared as attributes of classes and interfaces or locally in methods.

Details

This rule is directly derived from the basic rule [use ABAP objects](javascript:call_link\('abenabap_obj_progr_model_guidl.htm'\) "Guideline"). If you disregard helper variables in procedures ([methods](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline")), the content of the variable of a program indicates the state of the program and consequently the state of an application. In object-oriented programming, the class replaces the program, and the state of an application is no longer the state of the programs but the state of the classes or objects.

Furthermore, the rule [exploit the benefits of encapsulation](javascript:call_link\('abenencapsulation_guidl.htm'\) "Guideline") also assumes a critical role. The data of an application is sufficiently protected from misuse only in the visibility sections of classes.

Except for the following exception, you should not declare any global variables in a new ABAP program. They indicate a poor programming style that disregards proven concepts such as task sharing and encapsulation. If you need to access the same data of a program from multiple local classes and interfaces, you must create them in an appropriate visibility section of a local class or an interface. These can also be local classes or interfaces that contain nothing but such attributes.

Hint

The above rule also applies to the declaration of [field symbols](javascript:call_link\('abendyn_access_data_obj_guidl.htm'\) "Guideline") with the FIELD-SYMBOLS statement.

Exception

If classic dynpros and selections screens are still used instead of [SAPUI5](javascript:call_link\('abeninterface_tech_guidl.htm'\) "Guideline") or [Web Dynpro ABAP](javascript:call_link\('abeninterface_tech_guidl.htm'\) "Guideline"), global variables are required as interfaces for the communication between ABAP and classic dynpros. Global variables can be declared using the following statements for this purpose alone:

-   DATA, [TABLES](javascript:call_link\('abentable_work_area_guidl.htm'\) "Guideline") and CONTROLS for general dynpros

-   PARAMETERS and SELECT-OPTIONS for selection screens

In these cases, you have to ensure the maximum possible [encapsulation](javascript:call_link\('abenencap_class_interf_guidl.htm'\) "Guideline") of those global variables.

Bad Example

The following source code shows the top include of a function pool for document display. In addition to the required interface work area, which is declared with TABLES, further global variables exist that indicate the state of the display. However, according to the above rule, you are not allowed to use global variables for purposes other than communication with a classic dynpro.

FUNCTION-POOL show\_documents.
TABLES document\_structure.
DATA: g\_language TYPE sy-langu,
      g\_display\_mode TYPE ...
      ...
CLASS screen\_handler DEFINITION.
  PUBLIC SECTION.
    ...

Good Example

The following source code shows an improved example. The previously global variables are encapsulated in a class that is specifically provided for the state of the display, and can be addressed using display\_status=> in the other classes of the program.

FUNCTION-POOL show\_documents.
TABLES document\_structure.
CLASS display\_status DEFINITION.
  PUBLIC SECTION.
      CLASS-DATA: language TYPE sy-langu,
                  display\_mode TYPE ...
                  ...
ENDCLASS.
CLASS screen\_handler DEFINITION.
  PUBLIC SECTION.
  ...



**📖 Source**: [abendeclaration_variables_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_variables_guidl.htm)

### abendeclaration_inline_guidl.htm

> **📖 Official SAP Documentation**: [abendeclaration_inline_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_inline_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abendata_type_obj_guidl.htm'\)) → 

Inline Declarations

Background

The declaration operators

-   [DATA(var)](javascript:call_link\('abendata_inline.htm'\))

-   [FIELD-SYMBOLS <fs>.](javascript:call_link\('abenfield-symbol_inline.htm'\))

can be used to make inline declarations in [write positions](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry"). In this way, declarations are made in operational statements rather than in [declaration statements](javascript:call_link\('abendeclaration_statement_glosry.htm'\) "Glossary Entry"). The declaration is made when the program is compiled, regardless of whether the statement is actually executed.

Rule

Only use inline declarations locally

Only make inline declarations in processing blocks that support [local data](javascript:call_link\('abenlocal_data_glosry.htm'\) "Glossary Entry"). Use them as if they were local declarations in the current statement block.

Details

If used correctly, inline declarations are an excellent way of making programs leaner and easier to understand. An inline declaration in a statement works like a short form of a declaration statement directly in front of the statement, which is why the guidelines for declaration statements must be followed:

-   The rule dictating that [no global program variables and field symbols](javascript:call_link\('abendeclaration_variables_guidl.htm'\) "Guideline") are to be declared also applies to inline declarations, without restrictions. For this reason, statements with inline declarations should only be specified in processing blocks with local data, namely procedures and preferably methods. If not, the variables and field symbols declared inline would be global in the program, with all the drawbacks listed in the description of the rule.

-   Inline declarations are an exception to the rule that [local declarations](javascript:call_link\('abenlocal_declar_guidl.htm'\) "Guideline") should only be made at the start of a procedure. They are specified in operational statements, which means that, unlike declaration statements, they cannot be specified at the start of the procedure. Despite this, the restrictions stated in the rule for local declarations are still valid for inline declarations. In particular, the validity of inline declarations is not limited to their current statement block. Inline declarations should, therefore, only be specified in less complex procedures, so making them easier to understand. The variables and field symbols declared inline should only be used in the direct vicinity of their declaration. Under no circumstances should a variable declared inline be accessed dynamically before the declaration. When an inline declaration is specified in a (conditional) control structure, it should usually only be accessed within this statement block.

Bad Example

Inline declaration of a field symbol <pattern> and two variables moff and mlen in a LOOP and their later reuse in a different loop. At first glance, it appears that the declarations are only valid in the first loop and only conditionally, but they are valid for the whole method and unconditionally.

METHOD demo\_method.
  "IMPORTING i\_tab1 TYPE TANDARD TABLE OF string
  "IMPORTING i\_tab2 TYPE TANDARD TABLE OF string
  "IMPORTING i\_text TYPE string
  IF i\_tab1 IS NOT INITIAL.
    LOOP AT i\_tab1 ASSIGNING FIELD-SYMBOL(<pattern>).
      FIND <pattern> IN i\_text MATCH OFFSET DATA(moff)
                               MATCH LENGTH DATA(mlen).
      ...
    ENDLOOP.
  ENDIF.
  IF i\_tab2 IS NOT INITIAL.
    LOOP AT i\_tab2 ASSIGNING <pattern>.
      FIND <pattern> IN i\_text MATCH OFFSET moff
                               MATCH LENGTH mlen.
      ...
    ENDLOOP.
  ENDIF.
ENDMETHOD.

Good Example

The field symbols and variables declared inline are only used locally in the their respective loops. The fact that they are valid in the whole method is ignored, for the sake of simplicity. If the field symbol and the variables are only to be declared once for both loops, they should be declared at the start of the method using declaration statements.

METHOD demo\_method.
  "IMPORTING i\_tab1 TYPE TANDARD TABLE OF string
  "IMPORTING i\_tab2 TYPE TANDARD TABLE OF string
  "IMPORTING i\_text TYPE string
  IF i\_tab1 IS NOT INITIAL.
    LOOP AT i\_tab1 ASSIGNING FIELD-SYMBOL(<pattern1>).
      FIND <pattern1> IN i\_text MATCH OFFSET DATA(moff1)
                                MATCH LENGTH DATA(mlen1).
      ...
    ENDLOOP.
  ENDIF.
  IF i\_tab2 IS NOT INITIAL.
    LOOP AT i\_tab2 ASSIGNING FIELD-SYMBOL(<pattern2>.
      FIND <pattern2> IN i\_text MATCH OFFSET DATA(moff2)
                                MATCH LENGTH DATA(mlen2).
      ...
    ENDLOOP.
  ENDIF.
ENDMETHOD.



**📖 Source**: [abendeclaration_inline_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_inline_guidl.htm)

### abenincluding_structures_guidl.htm

> **📖 Official SAP Documentation**: [abenincluding_structures_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenincluding_structures_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abendata_type_obj_guidl.htm'\)) → 

Including Structures

Background

In the program-internal design of structures with the BEGIN OF and END OF additions of the TYPES and DATA statements, you can use the INCLUDE TYPE or INCLUDE STRUCTURE statements to integrate all components of another structure with the current structure at this place without creating a specific substructure. You can specify a name for shared addressing and a suffix to avoid naming conflicts. ABAP Dictionary provides the same functions.

Substructures, in contrast, are formed if the components of a structure themselves are structured. A structure with substructures is known as a nested structure.

Rule

Do not include components from structures

Do not integrate the components of other structures by using INCLUDE when declaring a structure. If required, you can include the components in a real substructure.

Details

The reasons for this rule are the following:

-   The integration of components can lead to naming conflicts. This is particularly problematic if structures of other contexts are integrated and changed retroactively.

-   Although it is possible to assign a name, the integrated structures cannot be addressed as such without restrictions. The necessary internal type information is individually stored for each integrated component. For the components of a substructure, however, this information is stored only once for the substructure

-   In contrast to real substructures, structures integrated using INCLUDE cannot be declared as boxed components. A boxed component is a structured component, which is managed through an internal reference and thus supports initial value sharing. This can considerably reduce the memory requirements for rarely filled components.

-   The statement cancels a [chained statement](javascript:call_link\('abenchained_statements_guidl.htm'\) "Guideline") that has been created with BEGIN OF and END OF.

If no real substructures can be formed, you must avoid naming conflicts as far as possible by using suffixes (RENAMING WITH SUFFIX addition). This recommendation also applies to the integration of structures in ABAP Dictionary, where you cannot always create real substructures (for example, for database tables).

Bad Example

The following source code shows the integration of the components of a structure into another structure, which is not recommended according to the above rule.

TYPES:
  BEGIN OF structure\_1,
  ...
  END OF structure\_1.
TYPES:
  BEGIN OF structure\_2,
  ...
  INCLUDE TYPE structure\_1 AS sub\_structure.
TYPES:
    ...
  END OF structure\_2.

Good Example

The following source code shows the declaration of a component of a structure as a substructure as recommended in the above rule.

TYPES:
  BEGIN OF structure\_1,
   ...
  END OF structure\_1.
TYPES:
  BEGIN OF structure\_2,
    ...
    sub\_structure TYPE structure\_1.
    ...
END OF structure\_2.



**📖 Source**: [abenincluding_structures_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenincluding_structures_guidl.htm)

### abenusing_types_guidl.htm

> **📖 Official SAP Documentation**: [abenusing_types_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenusing_types_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abendata_type_obj_guidl.htm'\)) → 

Using Types

Background

You can use the data types declared according to the rules on [Bound and Standalone Data Types](javascript:call_link\('abenbound_independent_dtype_guidl.htm'\) "Guideline") and [Declaration of Data Types and Constants](javascript:call_link\('abendeclaration_dtypes_const_guidl.htm'\) "Guideline") for declaring and creating data objects, as well as for typing field symbols or interface parameters. You specify them after the TYPE addition of the corresponding statement.

Rule

Use semantically appropriate data types only

Use existing types only if they match the semantics of the typed object. You must not select an existing type based only on the technical attributes.

Details

As long as it extends beyond an elemental ABAP type, the type of a data object or an interface parameter provides the source code reader with information about the semantics of these variables. This makes it easier to recognize the meaning of individual variables.

For this reason, you must use only data types whose semantics match the usage. The technical attributes of a type alone do not justify its use in a specific context, as this impedes the readability of the program.

In particular, this applies to the reuse or multiple use of existing types. If you require a data type with specific technical attributes for an application, you should not simply use any type with these attributes from ABAP Dictionary. In the past, this has frequently been the chosen procedure. Consequently applying package encapsulation may help prevent the unwanted use of own data types.

Hint

This rule applies especially for the use of structures from ABAP Dictionary. For example, you should never use a structure defining a database table as a template for input or output fields of classic dynpros or in Web Dynpro. This would violate the [SoC principle](javascript:call_link\('abenseperation_concerns_guidl.htm'\) "Guideline").

Bad Example

In the following source code a variable is declared, whose name and use clearly indicate that it is used for a truth value. The variable is declared with a technically correct, but semantically incorrect, data type. syst-batch, after all, is the data type for the [system field](javascript:call_link\('abensystem_fields_guidl.htm'\) "Guideline") sy-batch, which indicates whether a program is executed in the background.

DATA is\_empty TYPE syst-batch.
...
IF is\_empty IS INITIAL.
  ...
ENDIF.

Good Example

The following source code shows an improved example compared to the source code above. In this case, the abap\_bool type of type pool abap, which is intended for [truth values](javascript:call_link\('abendataobjects_true_value_guidl.htm'\) "Guideline"), is used. In addition, the request of the truth value is performed using a specifically designated constant from the same type pool.

DATA is\_empty TYPE abap\_bool.
...
IF is\_empty EQ abap\_false.
  ...
ENDIF.



**📖 Source**: [abenusing_types_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenusing_types_guidl.htm)

### abenref_types_objects_guidl.htm

> **📖 Official SAP Documentation**: [abenref_types_objects_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenref_types_objects_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abendata_type_obj_guidl.htm'\)) → 

Reference to Data Types or Data Objects

Background

As well as [using data types](javascript:call_link\('abenusing_types_guidl.htm'\) "Guideline") for declarations and typings with the addition TYPE, the alternative addition LIKE of the corresponding statements can be used to reference the data type of one of the data objects visible at this position directly. This includes references to data objects of the same program, interface parameters of the current procedure, attributes of global classes and interfaces, and constants in type pools.

Rule

Declare dependent data objects with reference to other data objects

If a data object directly depends on another data object, refer to it directly using LIKE for the declaration. In all other cases, use TYPE to refer to a standalone data type.

Details

For example, if a helper variable of the type of an input parameter is required within a procedure ([method](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline")), it should not be declared with reference to the type of the parameter using TYPE but with reference to the parameter itself using LIKE. It is also possible to declare work areas using LIKE LINE OF if the parameter is an internal table. In the case of typing with LIKE, the type of the parameter can be changed retroactively without always having to adapt the procedure implementation.

However, if no close reference to another data object exists, it is usually more useful to declare data objects with reference to a [standalone data type](javascript:call_link\('abenbound_independent_dtype_guidl.htm'\) "Guideline") by using TYPE.

Hint

Obsolete references to flat structures or database tables or views of the ABAP Dictionary using LIKE should never be implemented.

Bad Example

The following source code shows the declaration of a helper variable in a method that is supposed to be of the same data type as an interface parameter. The TYPE reference to the data type requires a manual implementation of any type changes.

CLASS some\_class DEFINITION ...
   PUBLIC SECTION.
     METHODS some\_method
       CHANGING some\_parameter TYPE some\_type.
     ...
ENDCLASS.
CLASS some\_class IMPLEMENTATION.
   METHOD some\_method.
     DATA save\_parameter TYPE some\_type.
     save\_parameter = some\_parameter.
     ...
   ENDMETHOD.
   ...
ENDCLASS.

Good Example

The following source code shows the improved declaration of the helper variable that now directly refers to the interface parameter with LIKE, so that possible type changes are automatically accepted.

   ...
    METHOD some\_method.
      DATA save\_parameter LIKE some\_parameter.
      save\_parameter = some\_parameter.
      ...
    ENDMETHOD.
...



**📖 Source**: [abenref_types_objects_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenref_types_objects_guidl.htm)

### abentable_work_area_guidl.htm

> **📖 Official SAP Documentation**: [abentable_work_area_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_work_area_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abendata_type_obj_guidl.htm'\)) → 

Table Work Areas

Background

Table work areas are structured data objects of a flat structure type, a database table type, or a view type from ABAP Dictionary declared using the statements TABLES or NODES. If declared using NODES, other ABAP Dictionary types are also possible.

From the perspective of the data type, the statements

[TABLES table\_wa](javascript:call_link\('abaptables.htm'\)).

[NODES table\_wa](javascript:call_link\('abapnodes.htm'\)).

are the same as

DATA table\_wa TYPE table\_wa.

This means that data objects with the same name and type as the corresponding data types from ABAP Dictionary are declared. This is supplemented by further meanings of TABLES and NODES. For the full range of meanings, refer to their documentation. The essential properties are as follows:

-   TABLES and NODES declare [interface work areas](javascript:call_link\('abenintern_extern_proc_call_guidl.htm'\) "Guideline"), which are shared by multiple programs of a program group.

-   TABLES declares interfaces to classic dynpros and selection screens.

-   NODES declares an interface to logical databases.

In addition, it is also possible to use table work areas declared using TABLES as implicit work areas in obsolete abbreviated forms of ABAP SQL, or even older statements for database accesses.

Rule

No table work areas except for classic dynpros

Only use the statement TABLES in the global declaration part of function pools to communicate with classic dynpros. Apart from in wrappers of logical databases, the statement NODES is no longer required.

Details

The statement TABLES is not allowed within classes anyway and, in the syntax, the statement NODES can only be created in the global declaration part of an executable program associated with a logical database. The latter option is [no longer allowed](javascript:call_link\('abenprogram_attribute_guidl.htm'\) "Guideline").

Since obsolete database accesses requiring the statement TABLES and shared data areas between programs are not allowed, there is no need to use the statement TABLES, except for declaring interfaces to classic dynpros (see the following exception).

Exception

If dynpro fields in [classic dynpros](javascript:call_link\('abenuser_interfaces_guidl.htm'\) "Guideline") are defined with reference to flat structures in ABAP Dictionary, the identically named global data objects of the ABAP program must be declared with the statement TABLES. Otherwise, the data objects of the ABAP program are not linked to the dynpro fields, and their content cannot be accessed. In addition, TABLES is also required for declaring specific work areas when handling function codes of selection screens.

Note

The restriction on the statement TABLES to this last remaining technical requirement, that is, the communication with classic dynpros and selection screens, can also be derived from other rules of these guidelines. However, since the use of the statement TABLES instead of the statement DATA is still very popular among experienced ABAP developers, the rule above explicitly stresses that it is not allowed.



**📖 Source**: [abentable_work_area_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_work_area_guidl.htm)

### abenliterals_guidl.htm

> **📖 Official SAP Documentation**: [abenliterals_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenliterals_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abendata_type_obj_guidl.htm'\)) → 

Literals

Background

A literal is a data object defined in the source code of a program by specifying a character-like value. Possible literals are:

-   Numeric literals
    String of digits with an optional sign. The data type is either i or p.

-   Character literals

-   Text field literals enclosed in single quotation marks ('). The data type is c.

-   String literals, which are enclosed in backquotes (\`). The data type is string.

In numeric literals, neither decimal separators nor scientific notation with mantissa and exponent are possible. Character literals with [correct content](javascript:call_link\('abennumbers_guidl.htm'\) "Guideline") must be used to represent these types of numeric values.

Rule

Avoid using literals in operand positions

Avoid using literals to specify values directly in the source code. Instead constants should be declared with these values. This applies to numeric values in particular.

Details

Certain values are required in more than one place in the source code. It is therefore not helpful to specify these values directly in the source code, since multiple statements would need to be modified each time the value is changed. An appropriate constant can be used instead to enable the value to modified at a central position in the source code. Literals are, of course, allowed when specifying values in the declaration of the constants. This can make the program significantly easier to maintain and enhance at a later date.

It can also be a good idea to create an appropriate constant for values used in only one place. The name of the constant gives the values semantics that make the source code easier to understand.

Numeric literals that appear in source code seemingly without any semantic meaning are often known as "magic numbers". Avoid using these in ABAP programs. When using character literals, [translatability](javascript:call_link\('abensystem_text_guidl.htm'\) "Guideline") is also important.

Exception

In certain situations, however, using constants can affect the readability of a program. It is better to specify a literal in these cases, as in the following examples:

-   CALL FUNCTION 'MY\_FUNC'.

-   IF sy-subrc = 0.

-   READ TABLE itab INDEX 1 or itab\[ 1 \]

-   ADD 1 TO counter.

These examples make the semantic meaning of the literals clear and translatability is not an issue.

Another area where character literals are vital is dynamic programming. Here, parts of statements or entire programs are generated, which is virtually impossible without using character literals. In addition, string templates offer various enhanced options for using literal texts.

Hint

If literals are used, ensure that literals are actually used, not equivalent expressions:

-   Numeric literal +*|*\-literal instead of arithmetic expression +*|*\- literal

-   Text string literal \`...\` instead of string expression |...|

The expressions are not evaluated until runtime, meaning that they have a lower performance. This distinction is irrelevant only if the literals are parts of expressions anyway.

Bad Example

The following source code uses the same literal multiple times to specify pi in operand positions. This multiple use makes the program unclear and error-prone.

DATA: radius TYPE decfloat34,
      circumference TYPE decfloat34,
      area TYPE decfloat34.
...

circumference =
  2\* '3.141592653589793238462643383279503' \* radius.
area =
  '3.141592653589793238462643383279503' \* radius \*\* 2.

Good Example

The following source code declares a constant that requires the literal the value of pi only once, and uses it in the respective operand positions.

CONSTANTS pi TYPE decfloat34
             VALUE '3.141592653589793238462643383279503'.

DATA: radius        TYPE decfloat34,
      circumference TYPE decfloat34,
      area          TYPE decfloat34.
...
circumference = 2 \* pi \* radius.
area          = pi \* radius \*\* 2.



**📖 Source**: [abenliterals_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenliterals_guidl.htm)

### abenstrings_guidl.htm

> **📖 Official SAP Documentation**: [abenstrings_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstrings_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abendata_type_obj_guidl.htm'\)) → 

Strings

Background

Strings are [dynamic data objects](javascript:call_link\('abenuse_dyn_data_object_guidl.htm'\) "Guideline") of variable length. There are text strings of the string data type and byte strings of the xstring data type, in which character strings or byte strings can be saved.

In contrast to text and byte fields of a fixed length (c, x data types), the length of strings automatically adapts to the content. Other data types, such as n, d, and t, are also handled as text fields in many operand positions. Strings are deep data objects that are internally managed by references. For this, the following additional memory is required:

-   Strings whose length is less than approximately 30 characters or 60 bytes require between approximately 10 and 40 bytes of additional memory, depending on the string length.

-   For longer strings, the additional memory requirement is approximately 50 bytes, irrespective of the string length.

In the case of assignments between strings, sharing takes effect. This means that only the internal reference is copied first. Sharing is canceled if the source or target object is accessed for modification.

Rule

Use strings in character string and byte string processing

Use strings rather than fixed length fields for the internal saving and processing of character strings and byte strings.

Details

Strings are more flexible than fields of a fixed length and usually help to save memory space, because no unnecessary space is occupied by blanks or zeros, and because sharing is implemented for assignments. Furthermore, trailing blanks are always significant in text strings. Text fields simply ignore trailing blanks in many operand positions (but not in all), which may be quite confusing at times.

Exception

In the following cases, fields of a fixed length should be used instead of strings:

-   The length of the field is critical, for example, for templates or for interfaces to screen fields.

-   Despite [sharing](javascript:call_link\('abenadmin_costs_dyn_mem_obj_guidl.htm'\) "Guideline"), the additional administration work outweighs the benefits which can often be the case for very short strings. If it is obvious that a certain length is never exceeded, short fields of a fixed length can also be used.

-   Structures that only contain character-like components should be handled like a single text field. This is not possible for structures that contain text strings.

Bad Example

The following source code shows an internal table for saving an HTML page whose line type is a text field with a fixed length of 255. Most of the memory space of the internal table, however, is probably wasted on blanks.

TYPES html\_line TYPE c LENGTH 255.
DATA html\_table TYPE TABLE OF html\_line.
APPEND '<HTML>' TO html\_table.
...
APPEND '<BODY>' TO html\_table.
...
APPEND '</BODY>' TO html\_table.
APPEND '</HTML>' TO html\_table.

Good Example

The following source code shows the above example but uses text strings. The memory space gained should outweigh the additional administration effort considerably. As an alternative to using an internal table, the HTML page can also be concatenated in a single text string; however, this makes it more difficult to read, for example, in the ABAP Debugger.

DATA html\_table TYPE TABLE OF string.
APPEND \`<HTML>\` TO html\_table.
...
APPEND \`<BODY>\` TO html\_table.
...
APPEND \`</BODY>\` TO html\_table.
APPEND \`</HTML>\` TO html\_table.



**📖 Source**: [abenstrings_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstrings_guidl.htm)

### abenstart_values_guidl.htm

> **📖 Official SAP Documentation**: [abenstart_values_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstart_values_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abendata_type_obj_guidl.htm'\)) → 

Start Values

Background

If you declare a data object with the statement DATA, you can use the addition [VALUE](javascript:call_link\('abapdata_options.htm'\)) to set a value, with which the data object is filled when it is created. If the addition VALUE is not used, the system uses the type-dependent initial value. If the statement CONSTANTS is used, the addition VALUE must always be specified. If the type-dependent initial value is required here, this can be achieved using the addition VALUE IS INITIAL. The addition [DEFAULT](javascript:call_link\('abapmethods_parameters.htm'\)) for input parameters of methods is a further option for start values.

If the specified start value does match the type and length of the data object, the value is converted when the program is generated.

Rule

Start values must match the data type of the data object

Only use the addition VALUE to enter start values that exactly match the data type of the declared data object in terms of type, content, and length.

Details

The start value cannot always be specified in a type-compliant way, since ABAP does not support type-compliant [literals](javascript:call_link\('abenliterals_guidl.htm'\) "Guideline") for all possible data types. In all cases where a conversion cannot be avoided, choose the content of literals specified as start values so that the actual value meets the requirements when the source code is read.

Hint

If a start value cannot be converted to the data type of the data object, no syntax error occurs and program generation is canceled at activation time instead. Non-convertible start values for input parameters of methods, in fact, are not detected until the method is called. This can only occur, however, when literals are specified.

Bad Example

The average reader may well expect the constant high\_noon in the following source code to contain the value 120000. However, the constant actually contains the value 092000, because the value of the numeric literal refers to the number of seconds. This means 12,000 seconds is actually the time 09:20 on the following day.

CONSTANTS high\_noon TYPE t VALUE 120000.

Good Example

The following source code corrects the above example by replacing the numeric literal with a text field literal. Now the constant high\_noon contains the expected value 120000.

CONSTANTS high\_noon TYPE t VALUE '120000'.



**📖 Source**: [abenstart_values_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstart_values_guidl.htm)

### abendataobjects_true_value_guidl.htm

> **📖 Official SAP Documentation**: [abendataobjects_true_value_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendataobjects_true_value_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abendataobjects_true_value_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendataobjects_true_value_guidl.htm)


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abendata_type_obj_guidl.htm'\)) → 

Data Objects for Truth Values

Background

Truth values are results of logical expressions. A truth value is either true or false. ABAP does not yet support Boolean data types and thus does not support data objects for truth values. Therefore, the result of a logical expression cannot be assigned directly to a data object.

It has become common practice to express the truth value "true" as value "X" and the truth value "false" as a blank (" "). There are also Boolean functions that have a logical expression as an argument and are returned as the value "X" or a blank, depending on the result.

To make it easier to handle truth values expressed in this way, the type pool abap contains a data type abap\_bool of elementary type c with length 1, and the constants abap\_true of value "X" and abap\_false of value " " as substitutes for a real Boolean data type. There is also a constant abap\_undefined of value "-".

Rule

Use the data type abap\_bool for truth values

When working explicitly with truth values, use the type abap\_bool as a substitute for a real Boolean data type. A data object declared in this way should have no values other than the relevant constants abap\_true and abap\_false (also abap\_undefined).

Details

Using the type abap\_bool and the constants abap\_true and abap\_false makes it clear that truth values are being used here.

In accordance with the rule for [avoiding](javascript:call_link\('abenliterals_guidl.htm'\) "Guideline") literals in operand positions, not only the literals 'X' and ' ' should be used. State queries about the [predicate operators](javascript:call_link\('abenpredicate_operator_glosry.htm'\) "Glossary Entry") IS INITIAL and IS NOT INITIAL or the use of the constant space are also not advisable, because they require knowledge of the technical values of abap\_true and abap\_false, which are not significant in the sense of real Boolean data objects.

The type pool abap contains a third constant for the type abap\_bool, namely abap\_undefined. However, implementing a three-value logic is only useful and recommended in exceptional cases. In this case, note that abap\_undefined does not contain the initial value for a variable of type abap\_bool. The initial value is always the value of abap\_false. However, the value of abap\_undefined can, if required, be specified using the addition VALUE when declaring a truth value as the start value.

Bad Example

The following source code shows an unsuitable emulation of the Boolean data objects not present in ABAP.

DATA is\_found TYPE c LENGTH 1.
...
is\_found = 'X'.
...
IF is\_found IS NOT INITIAL.
   ...
ENDIF.

Good Example

The following source code shows the recommended emulation of the Boolean data objects not present in ABAP.

DATA is\_found TYPE abap\_bool.
...
is\_found = abap\_true.
...
IF is\_found = abap\_true.
   ...
ENDIF.
