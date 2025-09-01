# ABAP - Keyword Documentation / ABAP - Release News / News for Release 4.xx / News for Release 4.6C

Included pages: 5



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abennews-46c.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-46c.htm)
- [abennews-46c-objects.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-46c-objects.htm)
- [abennews-46c-runtime.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-46c-runtime.htm)
- [abennews-46c-se30.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-46c-se30.htm)
- [abennews-46c-sonstiges.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-46c-sonstiges.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.57
**Generated**: 2025-09-01T11:25:45.284Z

---

### abennews-46c.htm

> **📖 Official SAP Documentation**: [abennews-46c.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-46c.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 4.xx](javascript:call_link\('abennews-4.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: News for Release 4.6C, ABENNEWS-46C, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

News for Release 4.6C

The following topics were revised during the development of SAP Basis Release 4.6C.

-   [ABAP Objects in Release 4.6C](javascript:call_link\('abennews-46c-objects.htm'\))
-   [Optimization in the Runtime Framework in Release 4.6C](javascript:call_link\('abennews-46c-runtime.htm'\))
-   [Runtime Analysis in Release 4.6C](javascript:call_link\('abennews-46c-se30.htm'\))
-   [Further Changes in Release 4.6C](javascript:call_link\('abennews-46c-sonstiges.htm'\))

Earlier Changes in ABAP:

[News for Release 4.6A](javascript:call_link\('abennews-46a.htm'\))
[News for Release 4.0 and 4.5](javascript:call_link\('abennews-40.htm'\))
[News for Release 3.0](javascript:call_link\('abennews-30.htm'\))
[Changes Before Release 3.0](javascript:call_link\('abennews-21.htm'\))

Continue
[ABAP Objects in Release 4.6C](javascript:call_link\('abennews-46c-objects.htm'\))
[Optimization in the Runtime Framework in Release 4.6C](javascript:call_link\('abennews-46c-runtime.htm'\))
[Runtime Analysis in Release 4.6C](javascript:call_link\('abennews-46c-se30.htm'\))
[Further Changes in Release 4.6C](javascript:call_link\('abennews-46c-sonstiges.htm'\))



**📖 Source**: [abennews-46c.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-46c.htm)

### abennews-46c-objects.htm

> **📖 Official SAP Documentation**: [abennews-46c-objects.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-46c-objects.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for Release 4.6C](javascript:call_link\('abennews-46c.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects in Release 4.6C, ABENNEWS-46C-OBJECTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

ABAP Objects in Release 4.6C

SAP has expanded ABAP Objects 4.6C to include the following components:

[1\. Run Time Type Identification](#!ABAP_MODIFICATION_1@1@)
[2\. Local Types and Classes](#!ABAP_MODIFICATION_2@2@)
[3\. Specifying the %\_FRIEND Addition](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Run Time Type Identification

The method APPLIES\_TO\_CLASS defined in the class CL\_ABAP\_OBJECTDESCR checks whether or not a reference that has the same type as the type description object can point to an object of the passed class. The class CL\_ABAP\_OBJECTDESCR is assigned to the [Run Time Type Identification](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry") (RTTI) area in the ABAP Runtime System.

Run time type identification also enables a technical type name to be defined, although types without names can also be used for dynamic type declarations like [CREATE DATA ...](javascript:call_link\('abapcreate_data.htm'\)) or [ASSIGN .... CASTING](javascript:call_link\('abapassign_casting.htm'\)).

Modification 2   

Local Types and Classes

Local [CLASS-POOLS](javascript:call_link\('abapclass-pool.htm'\)) types can now be implemented in the [PRIVATE SECTION](javascript:call_link\('abapprivate.htm'\)) of the global class in question too.

Local data types, classes, and interfaces are now defined in includes known as [CCDEF include](javascript:call_link\('abenccdef_glosry.htm'\) "Glossary Entry") and [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") instead of in the \===CL include.

Furthermore, the [macro](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry") include \===CCMAC makes it possible to define macros in global classes.

Modification 3   

Specifying the %\_FRIEND Addition

Specifying the addition %\_FRIEND of the statement DATA ... TYPE REF TO class makes it possible to access all methods and data elements of the system class class.



**📖 Source**: [abennews-46c-objects.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-46c-objects.htm)

### abennews-46c-runtime.htm

> **📖 Official SAP Documentation**: [abennews-46c-runtime.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-46c-runtime.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for Release 4.6C](javascript:call_link\('abennews-46c.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Optimization in the Runtime Framework in Release 4.6C, ABENNEWS-46C-RUNTIME, 757%0D%0
A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Optimization in the Runtime Framework in Release 4.6C

In Release 4.6C, the entire ABAP runtime framework was overhauled, in terms of how programs were generated and executed. The following steps were taken to reduce the load size considerably and improve performance further.

[1\. Handling the Database Buffer](#!ABAP_MODIFICATION_1@1@)
[2\. Handling Type Pools](#!ABAP_MODIFICATION_2@2@)
[3\. Handling Structures](#!ABAP_MODIFICATION_3@3@)
[4\. Further Developments](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Handling the Database Buffer

The statement [PERFORM n ON ON ROLLBACK](javascript:call_link\('abapperform.htm'\)), which is the equivalent to the statement [PERFORM n ON COMMIT](javascript:call_link\('abapperform.htm'\)), can now be used in the program. This means that all flagged form routines are executed when [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) is used.

Until now, if a termination message was raised by a [CATCH SYSTEM-EXCEPTIONS ...](javascript:call_link\('abapcatch_sys.htm'\)) statement, only one rollback was carried out in the task handler area. Now the system calls a subroutine, which deletes all [ON COMMIT](javascript:call_link\('abapperform.htm'\)) information and performs the scheduled subroutines.

The system field SY-ONCOM is now set for local [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry") (as it is for asynchronous updates). This raises a runtime error when a [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) is triggered for a local update.

Modification 2   

Handling Type Pools

From now on, types in type pools that are not used are no longer generated in the programs that use the [TYPE POOL](javascript:call_link\('abaptype-pool.htm'\)). Dynamic accesses are now performed by loading the load table for the type pools at runtime.

In addition, constants in type pools that are not used are no longer generated in the programs that include them. Duplicate control blocks for components are no longer created in key lists for ABAP Dictionary tables. Again, dynamic accesses are now performed using type pool load.

Modification 3   

Handling Structures

Additional type information for structure components is no longer generated when the system performs simple operations like [\=](javascript:call_link\('abapmove.htm'\)) or [IF](javascript:call_link\('abapif.htm'\)).

Now, when a structure is passed to a [form routine](javascript:call_link\('abapform.htm'\)), the type comparison is also performed when the actual parameter is [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") and the formal parameter is [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry"). (Previously, flat structures could only be compared with flat, and deep with deep).

Modification 4   

Further Developments

Now, assignments to neighboring memory areas are bundled in one internal statement, as soon as the syntax check is performed or when the program is generated. This ensures that the system no longer creates superfluous administrative information.

If data objects from the [Automation Controller](javascript:call_link\('abenole2.htm'\)) are referenced, and then disappear from the stack or internal table, the runtime framework aborts as soon as the stack is created. This means, for example, that the object can be displayed in the short dump.

If a program calls a second program at runtime, the system switches to this second program much more quickly than before. It also switches more quickly to a method called by another method. This performance gain is important, if both translation units are in the [PXA](javascript:call_link\('abenpxa_glosry.htm'\) "Glossary Entry") (Program Executable Area), less so when the program is being read from the database.



**📖 Source**: [abennews-46c-runtime.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-46c-runtime.htm)

### abennews-46c-se30.htm

> **📖 Official SAP Documentation**: [abennews-46c-se30.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-46c-se30.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for Release 4.6C](javascript:call_link\('abennews-46c.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Runtime Analysis in Release 4.6C, ABENNEWS-46C-SE30, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

Runtime Analysis in Release 4.6C

In Release 4.6C, the runtime analysis transaction was enhanced to include the following functions:

[1\. Bar Color on the Evaluation Overview Screen](#!ABAP_MODIFICATION_1@1@)
[2\. Object-Centered Hit Lists](#!ABAP_MODIFICATION_2@2@)
[3\. Measurement Restrictions](#!ABAP_MODIFICATION_3@3@)
[4\. Sets of Statistics](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Bar Color on the Evaluation Overview Screen
When ABAP statements or system statements are analyzed, the system shows a green bar to indicate that 50 percent of the total execution time was required for the execution of the relevant statements. A red bar indicates that more than 50 percent of the total execution time was used. When database operations are analyzed, a red bar indicates that 25 percent of the total execution time has been used.

Modification 2   

Object-Centered Hit Lists
For ABAP programs that work with classes and instances, the appropriate hit lists are now created. It is also possible filter the display of methods and events belonging to this class or instance.

Modification 3   

Measurement Restrictions
From now on, the system uses the variant of a measurement restriction that was created or edited most recently. The default variant is set to None in [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"). In all other systems, it is set to Full.

Modification 4   

Sets of Statistics

Sets of statistics are no longer produced when performance data is aggregated.



**📖 Source**: [abennews-46c-se30.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-46c-se30.htm)

### abennews-46c-sonstiges.htm

> **📖 Official SAP Documentation**: [abennews-46c-sonstiges.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-46c-sonstiges.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abennews-46c-sonstiges.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-46c-sonstiges.htm)


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for Release 4.6C](javascript:call_link\('abennews-46c.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Further Changes in Release 4.6C, ABENNEWS-46C-SONSTIGES, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Further Changes in Release 4.6C

[1\. Scan Buffer Enhancement](#!ABAP_MODIFICATION_1@1@)
[2\. New Functions for Strings](#!ABAP_MODIFICATION_2@2@)
[3\. Greater Precision in BCD Arithmetic](#!ABAP_MODIFICATION_3@3@)
[4\. New Comparison Expression IS SUPPLIED](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Scan Buffer Enhancement

The scan buffer has been increased from 8 kB to 28 kB. Each ABAP statement can now contain a parameter list of this length. For example, a [WHERE](javascript:call_link\('abapwhere.htm'\)) clause can now contain 450 selection entries (instead of 100 as before) if variable names of 30 characters are used.

Modification 2   

New Functions for Strings

The functions CHARLEN and NUMOFCHAR are now available for strings.

[CHARLEN](javascript:call_link\('abapcompute_arith.htm'\)) returns the length of the first character in a string or a character-like field. In single-byte code pages, this is always 1. In SAP-compatible multibyte code pages, this can be either 1 or 2.

[NUMOFCHAR](javascript:call_link\('abapcompute_arith.htm'\)) returns the number of characters in a string or character-like field. In single-byte [code pages](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry"), the behavior is the same as for the [STRLEN](javascript:call_link\('abapcompute_arith.htm'\)). In multibyte code pages, characters occupying more than one byte are considered to have a length of 1.

Modification 3   

Greater Precision in BCD Arithmetic

BCD arithmetic for the data type P has been modified so that intermediate results are now calculated using 127 digits (instead of 63 as before). This change affects the internal representation only, since type P fields are still defined with a maximum of 16 bytes (or 31 digits).

Modification 4   

New Comparison Expression IS SUPPLIED

The comparison expression [IS SUPPLIED](javascript:call_link\('abenlogexp_supplied.htm'\)) indicates whether an actual parameter is specified for an optional formal parameter of a method or function module. The new expression replaces the expression [IS REQUESTED](javascript:call_link\('abenlogexp_requested.htm'\)), and renders it obsolete.
