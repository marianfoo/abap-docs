# ABAP - Keyword Documentation / ABAP - Programming Guidelines / ABAP-Specific Rules / Program Type and Program Attributes

Included pages: 4



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenprogr_type_features_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogr_type_features_guidl.htm)
- [abenprogram_type_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_type_guidl.htm)
- [abenprogram_attribute_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_attribute_guidl.htm)
- [abenoriginal_langu_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoriginal_langu_guidl.htm)

**Bundle Contains**: 4 documentation pages
**Version**: ABAP 7.55
**Generated**: 2025-09-01T11:25:45.668Z

---

### abenprogr_type_features_guidl.htm

> **📖 Official SAP Documentation**: [abenprogr_type_features_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogr_type_features_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [ABAP-Specific Rules](javascript:call_link\('abenabap_specific_rules_guidl.htm'\)) → 

Program Type and Program Attributes

As soon as an ABAP program is created, important decisions must be made about its robustness and maintainability by selecting its program type and attributes. Among other things, the program type and program attributes determine how strict the syntax check is. Another important property of a program (as well as all other development objects) is its original language.

-   [Program Type](javascript:call_link\('abenprogram_type_guidl.htm'\) "Guideline")

-   [Program Attributes](javascript:call_link\('abenprogram_attribute_guidl.htm'\) "Guideline")

-   [Original Language](javascript:call_link\('abenoriginal_langu_guidl.htm'\) "Guideline")

Continue
[Program Type](javascript:call_link\('abenprogram_type_guidl.htm'\))
[Program Attributes](javascript:call_link\('abenprogram_attribute_guidl.htm'\))
[Original Language](javascript:call_link\('abenoriginal_langu_guidl.htm'\))



**📖 Source**: [abenprogr_type_features_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogr_type_features_guidl.htm)

### abenprogram_type_guidl.htm

> **📖 Official SAP Documentation**: [abenprogram_type_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_type_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [ABAP-Specific Rules](javascript:call_link\('abenabap_specific_rules_guidl.htm'\)) →  [Program Type and Program Attributes](javascript:call_link\('abenprogr_type_features_guidl.htm'\)) → 

Program Type

Background

Every ABAP program has a program type that specifies which declarations and processing blocks a program can contain, and how it can be executed using the ABAP runtime environment. These are the possible program types in ABAP:

-   Executable program
    An executable program can contain all possible declarative statements. All processing blocks are possible except for function modules. The program supports classic dynpros and selection screens. It can be executed using the statement SUBMIT or using transaction codes. Executable programs are created in ABAP Editor.

-   Class pool
    A class pool always contains declarative statements for a global class. It can also include declarative statements for local types, interfaces, and classes. Only methods can be used as processing blocks. The pool does not support classic dynpros or selection screens. Global class methods can be called externally (depending on visibility) and public methods of the global class can be executed using transaction codes. Class pools are created using Class Builder.

-   Interface pool
    An interface pool can only contain the declarative statements for a global interface. Processing blocks, classic dynpros, and selection screens are not possible. Interface pools cannot be called or executed and are created using Class Builder.

-   Function pool (function pool)
    A function pool can contain all types of declarative statements. All processing blocks are supported except for the reporting event blocks. Classic dynpros and selection screens are supported. The associated function modules can be called, but it is also possible to access dynpro processing of the function pool by using transaction codes. Function pools using Function Builder.

-   Module pool
    A module pool can contain all possible declarative statements. All processing blocks are supported except for reporting event blocks and function modules. The module pool supports classic dynpros and selection screens. It can be executed using transaction codes. Module pools are created using ABAP Editor.

-   Subroutine pool
    A subroutine pool can contain all possible declarative statements. The LOAD-OF-PROGRAM event block, subroutines and methods can be used as processing blocks. The pool does not support classic dynpros or selection screens. The subroutines can be called, but it is also possible to execute methods using transaction codes. Subroutine pools are created using ABAP Editor.

-   Type pool (type group)
    A type pool can contain the declarative statements, TYPES and CONSTANTS. Processing blocks, classic dynpros, and selection screens are not possible. Type pools cannot be called or executed. Type pools are created using ABAP Dictionary.

In addition to these compilation units (programs that can be compiled independently), include programs can also be used for [source code organization](javascript:call_link\('abensource_code_orga_guidl.htm'\) "Guideline").

In ABAP, a program execution means that the system loads a program into the memory and executes one or more of its processing blocks. A distinction is made between standalone and called program execution:

-   Standalone program execution
    When programs are executed as standalone programs, the program is started using a transaction code (statements CALL TRANSACTION and LEAVE TO TRANSACTION) or using the statement SUBMIT for an executable program. The statement SUBMIT also allows execution in a background process.

-   Called program execution
    In called program executions, a running program calls a procedure (method, function module, or subroutine) of another program. If necessary, this other program is loaded into the [internal session of the calling program](javascript:call_link\('abenintern_extern_proc_call_guidl.htm'\) "Guideline").

-   The program flow for standalone program execution depends on the selected program type and the type of program call:

-   If the program is called using a transaction, a distinction is made between object-oriented (OO) transactions and dialog transactions. For object-oriented transactions, the transaction code is linked to a method of a local or global class. This method defines the program flow. Dialog transactions, however, are associated with a classic dynpro of the program. In this case, the program flow is defined by the associated dynpro flow logic.

-   The program flow of an executable program that was started using SUBMIT is defined by the reporting process of the ABAP runtime environment. The runtime environment calls the different reporting event blocks (START-OF-SELECTION, GET and END-OF-SELECTION) of the program.

-   The program type must be selected based on the technical program attributes described here and the requirements for program execution. Not all the program types mention here are appropriate for new developments.

Rule

Select the appropriate program type

To select the program type, proceed as follows:

-   The program type "class pool" or "interface pool" is automatically set for global classes and interfaces.

-   To implement completed functions that should not be part of the class library, use the program type "subroutine pool" for the implementation of local classes.

-   If required, the program type "function pool" is set automatically for function modules. In addition, function pools must be used to wrap classic dynpros or selection screens.

-   If the programs needs to be executed within the scope of background processing, the executable program type is automatically set.

-   New module pools or type pools should no longer be created.

Details

The above hierarchy for selecting the program type is derived from the basic [rule](javascript:call_link\('abenabap_obj_progr_model_guidl.htm'\) "Guideline") described, which defines the use of ABAP Objects. The following list describes specific aspects in detail:

-   If ABAP Objects functions need to be provided across the whole package or system, this is done using global classes or interfaces that have the program type "class pool" or "interface pool" implicitly. The call is performed using a method call or an OO transaction (if a standalone program execution is required).

-   The "subroutine pool" program type can be used to implement completed functions called using a transaction code (not using a method call), and which do not require passed parameters and do not have a user interface. Only local classes are used for implementation. The program is called using an OO transaction. Subroutine pools - as the name suggests - were originally intended for subroutines that were called from other programs. Subroutines (and calling subroutines externally in particular) are declared as obsolete, according to the existing programming guidelines. Subroutine pools no longer have this purpose. Instead, subroutine pools are suggested as independent containers for local classes. This is because they are otherwise barely affected by implicit processes of the ABAP runtime environment.

-   Remote-enabled function modules (RFM) (which provide functions using the RFC interface across servers or across systems or are used for parallelization) can only be created in a function pool. The implementation of the actual functions, however, is carried out in a class, for example in a local class within the [function pool](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline").

-   The same applies to update function modules (which are called for the update using CALL FUNCTION IN UPDATE TASK) as to RFMs.

-   Programs with a [classic dynpro interface or selection screens](javascript:call_link\('abenencap_class_interf_guidl.htm'\) "Guideline") (if still required) should also be created as a function pool. The function pool only implements the UI but does not contain its own application logic (based on the [SoC principle](javascript:call_link\('abenseperation_concerns_guidl.htm'\) "Guideline")). This program type is suitable because it can contain both classic dynpros and an external functional interface in the form of function modules. The dialog modules of the function pool called by the dynpro flow logic should only contain method calls, for instance, for methods of local classes.

-   An executable program includes multiple event blocks that are executed when the various reporting events occur. This form of event control is largely obsolete and should no longer be used. Executable programs should only be used where they are technically required, thus mainly for background processing. In this case, the actual implementation should also be carried out in methods, for example, methods of a local class within the executable program. The event block of the initial event, START-OF-SELECTION, should only contain a [method call](javascript:call_link\('abendial_mod_event_block_guidl.htm'\) "Guideline"). No other event blocks should be included anymore.

-   The module pool used to be the program type traditionally used for classic dialog programming with dynpros. The [Separation of Concerns](javascript:call_link\('abenseperation_concerns_guidl.htm'\) "Guideline") concept is not sufficiently supported by module pools. This is why no more new module pools should be created. Instead, any classic dynpros that are still required should be wrapped in function pools.

-   The type pool program type was initially implemented as a temporary solution. This was because it was not always possible to define types for internal tables in ABAP Dictionary. The same applied to the global storage of constants. Both gaps have now been closed. In ABAP Dictionary, any types can be defined. In global classes and interfaces, types and constants can be created for package-wide or system-wide use. Therefore, the "type pool" program type is obsolete, and no new [type pools](javascript:call_link\('abendeclaration_dtypes_const_guidl.htm'\) "Guideline") should be created.

Note

In cases where program types other than class and interface pools are still used, the check Obsolete Statements (OO Context) should be activated in the [extended program check](javascript:call_link\('abenextended_program_check_guidl.htm'\) "Guideline"). This enables same stringent syntax check to be implemented for program components not implemented in local classes as for within classes.



**📖 Source**: [abenprogram_type_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_type_guidl.htm)

### abenprogram_attribute_guidl.htm

> **📖 Official SAP Documentation**: [abenprogram_attribute_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_attribute_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [ABAP-Specific Rules](javascript:call_link\('abenabap_specific_rules_guidl.htm'\)) →  [Program Type and Program Attributes](javascript:call_link\('abenprogr_type_features_guidl.htm'\)) → 

Program Attributes

Background

Alongside various, less important properties, each ABAP program has a set of program attributes that control specific aspects of the program behavior and syntax check severity:

-   ABAP language version
    for configuring the [ABAP language version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry")

-   Fixed point arithmetic
    For respecting the decimal separator for operations with packed numbers.

-   Logical database
    For connecting an executable program with a logical database.

The program attributes are defined when a program is created the relevant tool (Class Builder, Function Builder, ABAP Editor). It is possible to change them later.

Rule

Use the default settings for program attributes

Set the program attributes for new programs as follows:

-   ABAP language version is [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry") or higher

-   Fixed Point Arithmetic activated

-   No assignment to a logical database

When a new program is created, these settings are the same as the default values. This means that they can be applied without making any changes. Once the program attributes are set they should no longer be modified.

Details

Different behaviors or check severities are only provided for compatibility reasons, to ensure that existing programs can still be compiled and executed. New programs should definitely not use obsolete settings.

-   When a new program is created, the ABAP Language Version attribute is already set to [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry") by default. This attribute must never be set to [Non-Unicode ABAP](javascript:call_link\('abennon_unicode_abap_glosry.htm'\) "Glossary Entry"). Only Unicode systems are supported in the current release, which means such programs can no longer be used. Higher [ABAP language versions](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") are possible because they cover the Unicode checks.

-   When a new program is created, the Fixed Point Arithmetic attribute is already set by default. This attribute must never be reset. If fixed point arithmetic is disabled, the position of the decimal separator of packed numbers (type p) is only respected for output in a classic dynpro, in assignments to fields of the types c and string, or for formatting using WRITE TO. The position is not respected for calculations. Today, this behavior only rarely meets the expectations of developers. If the calculation is to be carried out with packed numbers without any decimal places, this must be specified using the DECIMALS 0 addition for the declaration.

-   When a new executable program is created, the Logical Database attribute is empty. This attribute assigns executable programs to a logical database. This enables the selection screen and flow of the program to be combined with the selection screen and flow of the logical database. A logical database is a special development object that is maintained in Logical Database Builder and which provides other ABAP programs with data from the nodes of a hierarchical tree structure. A logical database has a hierarchical structure, an ABAP database program and a separate standard selection screen. Logical databases should no longer be used. This is because they are based on cross-program usage of global data, implicit subroutine calls and reporting event control, and therefore do not comply with modern concepts. The function module LDB\_PROCESS can be used to access existing logical databases. This function module can be called from a method. No new logical databases should be created. Instead a relevant service should be made available using a global class.

Because any later changes to the program attributes potentially involve extra work, the correct attributes should be configured right from the start and not changed later.

The following sections assume that fixed point arithmetic is always activated and that logical databases are not used.

Hint

From Release 740, SP05, the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) in the ABAP SQL syntax check require programs with the ABAP language version [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry") in which the program attribute [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is switched on.

Example

In the following source code performs a substring write across two numeric components of a structure.

METHOD ...
  DATA:
    BEGIN OF struct,
      comp1 TYPE i,
      comp2 TYPE i,
    END OF struct.
  struct+2(4) = 'XXXX'.
ENDMETHOD.

This was only possible for programs in the obsolete ABAP language version [Non-Unicode ABAP](javascript:call_link\('abennon_unicode_abap_glosry.htm'\) "Glossary Entry"). Here an implicit [casting](javascript:call_link\('abencasting_guidl.htm'\) "Guideline") of the subarea is performed for type c. The result in the components depends on the alignment gaps, the internal presentation of numeric values (byte order), and the code page used. Therefore, the result is extremely platform-dependent. A live program must never contain this type of code. This type of code often produces data with errors or runtime errors that are difficult to trace.

The above code produces a syntax error when used in an ABAP program defined as [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry") or higher in the program attributes (in accordance with the above rule). Unwanted substring accesses are prohibited, just like any other unwanted accesses to structures or other parts of the working memory. If these accesses cannot be identified by the syntax check, a runtime error occurs with a descriptive short dump while the program is running.



**📖 Source**: [abenprogram_attribute_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_attribute_guidl.htm)

### abenoriginal_langu_guidl.htm

> **📖 Official SAP Documentation**: [abenoriginal_langu_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoriginal_langu_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenoriginal_langu_guidl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoriginal_langu_guidl.htm)


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [ABAP-Specific Rules](javascript:call_link\('abenabap_specific_rules_guidl.htm'\)) →  [Program Type and Program Attributes](javascript:call_link\('abenprogr_type_features_guidl.htm'\)) → 

Original Language

Background

When a new repository object is created, such as a program, class, or database table in ABAP Dictionary, its original language must be specified. This is specified implicitly by the current logon language. All translatable texts created as part of a development object in a development project (including descriptive short texts and long texts, the text elements of a program, and the documentation of data types or interfaces) are assigned the specified original language. The texts are created in other languages in a translation process (triggered by development) from the original language into the target languages.

Once specified, there is currently no technical support for replacing an original language with another language across an entire project.

Rule

Define the original language at project level

Consider carefully at the beginning which original language you want to use for your repository objects at project level. Developers may only create their development objects in the original language defined for this project (or subproject).

Details

Proceed as follows when defining the original language:

-   If all development groups involved in a project share a single native language, define this language as the original language of all development objects (this is known as monolingual development).

-   If the development groups are multilingual,

-   the original language of all development objects is either a language understood by all developers involved (usually English, also called monolingual development)

-   or the original language in parts of the project is the native language of the majority of developers working in them (multilingual development).

Monolingual development groups are a best-case scenario, but are not always possible nowadays. The two possible scenarios for multilingual development groups, either monolingual or multilingual development, meet two different and contradictory requirements:

-   When you log on to a system in a language other than the original language, there is no effective way of working with development objects (either new or being developed) until a translation of the relevant texts has been created in the appropriate target language. Translation usually takes place in a follow-on translation system and has to be transported back to the development system. This means that an efficient development process is only possible if a single original language is defined at the beginning for the entire project, particularly in international development groups (often working in more than one location). All people involved in the development and validation process can then use the product, even if only for test purposes. If monolingual development is implemented in multilingual development groups, therefore, some (if not all) developers in a project need to create texts in a language other than their native language.

-   There are usually no tools or processes available for linguistic and stylistic checks on UI texts and documentation written by developers in a language other than their native language. Ideally, developers working on user dialogs and documentation should create texts in their native language and these texts should then be translated by trained translators into their own native language, using predefined terminology.

This second point is the reason why English is not required to be the one and only original language for all development projects, and why monolingual development groups should be free to work in their native language, with follow-on translation if required.

If a development group is multilingual, the original language of each development object must be decided case by case. Generally, the approach with single understood development language is used, since international development teams require monolingual development to be able to use their development resources most effectively for a particular project. In some cases, for example where subprojects require large volumes of text to be created, it might be preferable to define the native language of the developers as the original language. This is particularly relevant in SAP's in-house development teams, which still have a high proportion of German-speaking workers.

In multilingual projects, it is best develop associated business functions in a single language (at least at package level). Table contents should also be created in a single language.

Hints

-   When a repository object is created, its original language is the logon language. A conscious decision must be made for the logon language when creating or maintaining repository objects.

-   Regardless of whether a development project is monolingual or multilingual, consistent terminology must be defined for all texts created in the project and used across the board. In multilingual development projects, the translation of the terminology into the relevant languages should be completed before development start if possible, so that the terms can be used by the developers. The existing [standards](javascript:call_link\('abencorrectness_quality_guidl.htm'\) "Guideline") for UI texts and documents must also be followed.
