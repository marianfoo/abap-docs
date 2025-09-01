  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [ABAP-Specific Rules](javascript:call_link\('abenabap_specific_rules_guidl.htm'\)) →  [Programm Type and Program Properties](javascript:call_link\('abenprogr_type_features_guidl.htm'\)) → 

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

-   ABAP language version is [Standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry") or higher

-   Fixed Point Arithmetic activated

-   No assignment to a logical database

When a new program is created, these settings are the same as the default values. This means that they can be applied without making any changes. Once the program attributes are set they should no longer be modified.

Details

Different behaviors or check severities are only provided for compatibility reasons, to ensure that existing programs can still be compiled and executed. New programs should definitely not use obsolete settings.

-   When a new program is created, the ABAP Language Version attribute is already set to [Standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry") by default. This attribute must never be set to [Non-Unicode ABAP](javascript:call_link\('abennon_unicode_program_glosry.htm'\) "Glossary Entry"). Only Unicode systems are supported in the current release, which means such programs can no longer be used. Higher [ABAP language versions](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") are possible because they cover the Unicode checks.

-   When a new program is created, the Fixed Point Arithmetic attribute is already set by default. This attribute must never be reset. If fixed point arithmetic is disabled, the position of the decimal separator of packed numbers (type p) is only respected for output in a classic dynpro, in assignments to fields of the types c and string, or for formatting using WRITE TO. The position is not respected for calculations. Today, this behavior only rarely meets the expectations of developers. If the calculation is to be carried out with packed numbers without any decimal places, this must be specified using the DECIMALS 0 addition for the declaration.

-   When a new executable program is created, the Logical Database attribute is empty. This attribute assigns executable programs to a logical database. This enables the selection screen and flow of the program to be combined with the selection screen and flow of the logical database. A logical database is a special development object that is edited in Logical Database Builder and which provides other ABAP programs with data from the nodes of a hierarchical tree structure. A logical database has a hierarchical structure, an ABAP database program and a separate standard selection screen. Logical databases should no longer be used. This is because they are based on cross-program usage of global data, implicit subroutine calls and reporting event control, and therefore do not comply with modern concepts. The function module LDB\_PROCESS can be used to access existing logical databases. This function module can be called from a method. No new logical databases should be created. Instead a relevant service should be made available using a global class.

Because any later changes to the program attributes potentially involve extra work, the correct attributes should be configured right from the start and not changed later.

The following sections assume that fixed point arithmetic is always activated and that logical databases are not used.

Note

From Release 740, SP05, the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) in the ABAP SQL syntax check require programs with the ABAP language version [Standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry") in which the program attribute [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is switched on.

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

This was only possible for programs in the obsolete ABAP language version [Non-Unicode ABAP](javascript:call_link\('abennon_unicode_program_glosry.htm'\) "Glossary Entry"). Here an implicit [casting](javascript:call_link\('abencasting_guidl.htm'\) "Guideline") of the subarea is performed for type c. The result in the components depends on the alignment gaps, the internal presentation of numeric values (byte order), and the code page used. Therefore, the result is extremely platform-dependent. A live program must never contain this type of code. This type of code often produces data with errors or runtime errors that are difficult to trace.

The above code produces a syntax error when used in an ABAP program defined as [Standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry") or higher in the program attributes (in accordance with the above rule). Unwanted substring accesses are prohibited, just like any other unwanted accesses to structures or other parts of the working memory. If these accesses cannot be identified by the syntax check, a runtime error occurs with a descriptive short dump while the program is running.