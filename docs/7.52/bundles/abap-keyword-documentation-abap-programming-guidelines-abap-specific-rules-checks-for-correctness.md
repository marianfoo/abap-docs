# ABAP - Keyword Documentation / ABAP Programming Guidelines / ABAP-Specific Rules / Checks for Correctness

Included pages: 5



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencheck_correctness_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheck_correctness_guidl.htm)
- [abensyntax_check_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensyntax_check_guidl.htm)
- [abenextended_program_check_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextended_program_check_guidl.htm)
- [abencode_inspector_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencode_inspector_guidl.htm)
- [abenabap-testcockpit_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap-testcockpit_guidl.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.376Z

---

### abencheck_correctness_guidl.htm

> **📖 Official SAP Documentation**: [abencheck_correctness_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheck_correctness_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [ABAP-Specific Rules](javascript:call_link\('abenabap_specific_rules_guidl.htm'\)) → 

Checks for Correctness

This section enhances the section [Correctness and Quality](javascript:call_link\('abencorrectness_quality_guidl.htm'\) "Guideline") by providing more information about static checks on ABAP programs.

-   [Syntax Check](javascript:call_link\('abensyntax_check_guidl.htm'\) "Guideline")

-   [Extended Program Check](javascript:call_link\('abenextended_program_check_guidl.htm'\) "Guideline")

-   [Code Inspector](javascript:call_link\('abencode_inspector_guidl.htm'\) "Guideline")

-   [ABAP Test Cockpit](javascript:call_link\('abenabap-testcockpit_guidl.htm'\) "Guideline")

Continue
[Syntax Check](javascript:call_link\('abensyntax_check_guidl.htm'\))
[Extended Program Check](javascript:call_link\('abenextended_program_check_guidl.htm'\))
[Code Inspector](javascript:call_link\('abencode_inspector_guidl.htm'\))
[ABAP Test Cockpit](javascript:call_link\('abenabap-testcockpit_guidl.htm'\))



**📖 Source**: [abencheck_correctness_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheck_correctness_guidl.htm)

### abensyntax_check_guidl.htm

> **📖 Official SAP Documentation**: [abensyntax_check_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensyntax_check_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [ABAP-Specific Rules](javascript:call_link\('abenabap_specific_rules_guidl.htm'\)) →  [Checks for Correctness](javascript:call_link\('abencheck_correctness_guidl.htm'\)) → 

Syntax Check

Background

The syntax check provides syntax errors and syntax warnings:

-   As soon as a syntax error occurs, the system stops the check and displays the relevant error message. In many cases, the system suggests a correction that can be applied. Programs with syntax errors can be activated, but they cannot be generated and executed. In the extended program check, the syntax errors are reported as fatal errors. Syntax errors must be corrected at all costs.

-   If a syntax warning occurs, the syntax check is not terminated. The program can still be executed. The syntax warnings are displayed in ABAP Editor after the syntax check and the [extended program check](javascript:call_link\('abenextended_program_check_guidl.htm'\) "Guideline"). Of course, testing tools that include the checks of the extended program check (such as Code Inspector and ABAP Test Cockpit) also display syntax warnings. When a program is activated, the system only displays syntax warnings if syntax errors have occurred at the same time. The warnings reported by the syntax check are subdivided into three priorities that are only displayed by the extended program check:

-   Priority 1
    Known errors that could cause program termination if the ABAP program is executed. This priority also includes all constructs that should not be used at all, because they indicate program errors and are very likely to make the program behave incorrectly.

-   Priority 2
    This priority refers to all constructs that do not necessarily cause incorrect behavior, but are obsolete, for example, and should be replaced by current constructs. Priority 2 errors can become priority 1 errors or syntax errors in future releases.

-   Priority 3
    Includes all errors where correction would be beneficial, but not necessarily essential, for the current release. However, the possibility of raising the priority in future releases is not ruled out.

The [severity of the ABAP syntax check](javascript:call_link\('abenprogr_type_features_guidl.htm'\) "Guideline") is determined by the decisions that were made when the program was created. As a result, program constructs that only cause syntax warnings outside of classes can actually indicate real syntax errors within classes. Selected syntax warnings can be suppressed by using pragmas. A pragma is a program directive that affects specific checks but does not influence the program flow.

Rule

Take notice of syntax warnings

Take all warnings of the ABAP syntax check seriously. Syntax warnings are not permitted in completed programs.

Details

The causes of syntax warnings must always be corrected because they generally produce unpredictable errors. These warnings are often reclassified as errors by SAP in subsequent AS ABAP releases. In this case, a program that initially only includes syntax warnings has incorrect syntax and can no longer be used after an upgrade.

Selected syntax check warnings can be hidden using pragmas. With respect to the package check, selecting Package Check as Server in Package Builder is the first step to achieving real encapsulation.. It enables consumers of development objects to modify their where-used positions before hard syntax errors occur. For this reason, all package check warnings must be corrected to ensure that the program's syntax remains correct, even after increased encapsulation of the packages used.

Bad Example

The following source code causes a syntax warning. An internal table is accessed using a freely specified key, even though a secondary key with the same components exists. This access performs a linear search.

FIELD-SYMBOLS <fs> TYPE spfli.
DATA itab TYPE HASHED TABLE OF spfli
          WITH UNIQUE KEY carrid connid
          WITH NON-UNIQUE SORTED KEY cities COMPONENTS cityto cityfrom.
...
READ TABLE itab WITH KEY cityfrom = '...' cityto = '...'
                ASSIGNING <fs>.

Good Example

The following source code corrects the above example. Here, the secondary key is used to access the table. The access performs a binary search. Hiding the syntax warning using the associated program primkey is not recommended here.

FIELD-SYMBOLS <fs> TYPE spfli.
DATA itab TYPE HASHED TABLE OF spfli
          WITH UNIQUE KEY carrid connid
          WITH NON-UNIQUE SORTED KEY cities COMPONENTS cityto cityfrom.
...
ASSIGN itab\[ KEY cities
             COMPONENTS cityfrom = '...' cityto = '...' \] TO <fs>.



**📖 Source**: [abensyntax_check_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensyntax_check_guidl.htm)

### abenextended_program_check_guidl.htm

> **📖 Official SAP Documentation**: [abenextended_program_check_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextended_program_check_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [ABAP-Specific Rules](javascript:call_link\('abenabap_specific_rules_guidl.htm'\)) →  [Checks for Correctness](javascript:call_link\('abencheck_correctness_guidl.htm'\)) → 

Extended Program Check

Background

You can call the extended program check for activated programs either from ABAP Workbench or by using transaction SLIN. It performs static checks that are too complex for the normal syntax check. Both individual and multiple subtests can be performed, or an ATC check that includes important subtests.

The extended program check displays errors, warnings and messages. The ATC-relevant check reports errors and warnings that are particularly critical. These checks are also performed in program checks in [ABAP Test Cockpit (ATC)](javascript:call_link\('abenabap_test_cockpit_glosry.htm'\) "Glossary Entry"). The classification of individual results (error, warning or message) depends on whether an ATC-relevant check is performed or explicitly selected individual checks. The extended program check also displays the errors and warnings of the syntax check.

In the initial screen of the extended program check, a programming guidelines check can also be selected. This checks whether certain rules presented in this book (that can be verified statically) have been adhered to.

The messages from the extended program check, which are inapplicable in some special cases, can be hidden using pragmas. Before the introduction of pragmas, it was not possible to hide messages raised by a normal syntax check.

Note

The extended program check also covers security checks used to test ABAP programs for all potential [security risks](javascript:call_link\('abenabap_security.htm'\)). In customer systems, these checks are subject to a special licensing procedure.

Rule

Use the extended program check

Use the extended program check and take the results seriously. Message are not allowed to appear when the ATC checks are performed for a completed program.

Details

The errors, warnings and messages output by the extended program check are just as important as the syntax errors and syntax warnings from the [syntax check](javascript:call_link\('abensyntax_check_guidl.htm'\) "Guideline"). For example, an error reported by the extended program check can indicate that a program will definitely lead to a runtime error when it is executed. Warnings and messages usually indicate a questionable use of language elements, which is likely to cause unexpected program behavior.

In rare cases, when a result reported by the extended program check is not justified, this must be documented using an appropriate pragma (the relevant pragma is indicated in the message). This means that the system suppresses the message of the extended program check. Ideally, in less obvious situations, an additional comment should be used to describe why the message is not applicable.

Note

The extended program check provides useful help for writing ABAP programs in the correct way. Using unspecific pseudo comments or pragmas can undo the positive effect of the extended program check. In particular, the following statement should never be used:

SET EXTENDED CHECK OFF.

This statement suppresses all messages of the extended program check for an entire source code section.

If the ABAP program is submitted to a code review, the results of the extended program check should be used to evaluate the quality.

Bad Example

If the following source code is checked using the extended program check, a warning appears. It indicates a particularly questionable query of the content of the [return value](javascript:call_link\('abenreturn_value_guidl.htm'\) "Guideline") sy-subrc.

ASSIGN field TO <fs>.
IF sy-subrc <> 0.
  ...
ENDIF.

The program section shows a typical error in a program with correct syntax. The developer wrongly assumes that the static form of the ASSIGN statement sets the sy-subrc system field, which is not the case. The developer wrongly believes that he has secured his program. An incorrect program behavior occurs if sy-subrc has a value that is not zero, due to previous statements. Therefore, the main advantage of the extended program check is that the system does not just examine individual statements for correct syntax, but it also examines entire program sections for semantic errors.

Good Example

The following source code shows the corrected version of the above example. The predicate expression IS ASSIGNED is used (as recommended in the documentation) instead of sy-subrc. The message from the extended program check could also be hidden using a pragma (##subrc\_read), but this is not recommended in this case because the extended program check indicates a real problem.

ASSIGN field TO <fs>.
IF <fs> IS ASSIGNED.
  ...
ENDIF.



**📖 Source**: [abenextended_program_check_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextended_program_check_guidl.htm)

### abencode_inspector_guidl.htm

> **📖 Official SAP Documentation**: [abencode_inspector_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencode_inspector_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [ABAP-Specific Rules](javascript:call_link\('abenabap_specific_rules_guidl.htm'\)) →  [Checks for Correctness](javascript:call_link\('abencheck_correctness_guidl.htm'\)) → 

Code Inspector

Background

The Code Inspector tool performs a static check of repository objects regarding performance, security, syntax, and adherence to naming conventions. Transaction SCI can be called to use the full range of functions of Code Inspector to perform complex static checks and regular mass tests for large numbers of development objects.

Code Inspector can also be called from ABAP Workbench to perform a standard set of checks for the current object, for example by choosing Program → Check → Code Inspector in ABAP Editor. The standard check variant used here contains most of the checks from the [extended program check](javascript:call_link\('abenextended_program_check_guidl.htm'\) "Guideline"), as well as a few additional security and performance checks. Code Inspector can also be integrated into the release of transports.

As in the extended program check, the results of Code Inspector are divided into three categories (errors, warnings, and simple messages), which you can hide using special pseudo comments.

Rule

Use the standard Code Inspector check variant

Perform the standard check variant of Code Inspector before releasing a program, and correct all error messages.

Details

If the [extended program check](javascript:call_link\('abenextended_program_check_guidl.htm'\) "Guideline") is used, the standard check variant of Code Inspector only reports messages and checks that are not covered by the extended program check. These are mainly messages relating to potential performance or security risks in programs. Examples are messages about unfavorable WHERE conditions in a SELECT, a pass by value instead of a pass by reference for parameters, or non-secure program calls.

Compared with the messages of the extended program check, it is not always so easy to correct these problems at their source, perhaps because there is no other option for a selection, or because the transparency or robustness of a construct is seen as more important than a small potential loss of performance.

In such cases, the messages can be suppressed using the appropriate pseudo comments. A pseudo comment is a clear indication to the reader of a program that the program author has performed the relevant checks and has explicitly suppressed the message for a good reason. If necessary, pseudo comments can be substantiated by additional normal [comments](javascript:call_link\('abencomments_guidl.htm'\) "Guideline").

Bad Example

A standard Code Inspector run for the example class below issues warnings because an internal table is returned by pass by value and an inner join for database tables with activated table buffering is used in the SELECT statement.

CLASS class DEFINITION FINAL.
  PUBLIC SECTION.
    TYPES: BEGIN OF docu\_wa,
             object   TYPE dokil-object,
             dokldate TYPE dokhl-dokldate,
             dokltime TYPE dokhl-dokltime,
           END OF docu\_wa,
           docu\_tab TYPE SORTED TABLE OF docu\_wa
                    WITH NON-UNIQUE KEY object.
    METHODS get\_docu
              IMPORTING VALUE(langu)     TYPE sy-langu
              EXPORTING VALUE(documents) TYPE docu\_tab.
ENDCLASS.
CLASS class IMPLEMENTATION.
  METHOD get\_docu.
    SELECT d~object, h~dokldate, h~dokltime
           FROM dokil AS d
           INNER JOIN dokhl AS h
             ON h~id         = d~id     AND
                h~object     = d~object AND
                h~typ        = d~typ    AND
                h~langu      = d~langu  AND
                h~dokversion = d~version
           WHERE d~id     = 'SD'     AND
                 d~object LIKE 'AB%' AND
                 d~typ    = 'E'      AND
                 d~langu  = @langu
           INTO CORRESPONDING FIELDS OF TABLE @documents.
  ENDMETHOD.
ENDCLASS.

Good Example

The source code below shows the corrected version of the above class, for which Code Inspector no longer issues any messages.

The pass by value of the internal table is replaced by a pass by reference. When passing the elementary parameter langu, the pass by value is left unchanged to ensure robustness. In the standard check used, it would not have triggered a warning in any case. If Code Inspector displays a warning in a case such as this, it can be hidden by using the pseudo comment "#EC CI\_VALPAR.

The inner join of the SELECT statement bypasses table buffering, which would cause performance problems if the method was called frequently. However let us assume (for purpose of this example) that the method is part of a larger application, where shared objects ensure that the selected data is buffered. In this case, the inner join should be used instead of other constructs with poor performance, such as a nested SELECT loop. As a result, the warning from Code Inspector is hidden using the pseudo comment #EC CI\_BUFFJOIN. The reasons for this are described in a regular comment.

CLASS class DEFINITION FINAL.
  PUBLIC SECTION.
    TYPES: BEGIN OF docu\_wa,
             object   TYPE dokil-object,
             dokldate TYPE dokhl-dokldate,
             dokltime TYPE dokhl-dokltime,
           END OF docu\_wa,
           docu\_tab TYPE SORTED TABLE OF docu\_wa
                    WITH NON-UNIQUE KEY object.
    METHODS get\_docu
            IMPORTING VALUE(langu)         TYPE sy-langu "#EC CI\_VALPAR
            EXPORTING REFERENCE(documents) TYPE docu\_tab.
ENDCLASS.
CLASS class IMPLEMENTATION.
  METHOD get\_docu.
    SELECT d~object, h~dokldate, h~dokltime  "#EC CI\_BUFFJOIN
           FROM dokil AS d
           INNER JOIN dokhl AS h             "Buffering is done
             ON h~id         = d~id     AND  "by application
                h~object     = d~object AND  "with Shared Objects
                h~typ        = d~typ    AND
                h~langu      = d~langu  AND
                h~dokversion = d~version
           WHERE d~id     = 'SD'     AND
                 d~object LIKE 'AB%' AND
                 d~typ    = 'E'      AND
                 d~langu  = @langu
           INTO CORRESPONDING FIELDS OF TABLE @documents.
  ENDMETHOD.
ENDCLASS.



**📖 Source**: [abencode_inspector_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencode_inspector_guidl.htm)

### abenabap-testcockpit_guidl.htm

> **📖 Official SAP Documentation**: [abenabap-testcockpit_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap-testcockpit_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenabap-testcockpit_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap-testcockpit_guidl.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [ABAP-Specific Rules](javascript:call_link\('abenabap_specific_rules_guidl.htm'\)) →  [Checks for Correctness](javascript:call_link\('abencheck_correctness_guidl.htm'\)) → 

ABAP Test Cockpit

Background

ABAP Test Cockpit (ATC) is a framework that is integrated into ABAP Workbench; it simplifies considerably the handling of the tests required during development. ATC makes it possible to execute and display results for various tests on development objects, for example:

-   Extended program checks

-   Static performance tests

-   Module tests with ABAP Unit

-   Static usability tests

-   Package checks

-   Security checks

Whereas Code Inspector is only integrated into the development environment by way of the [standard check](javascript:call_link\('abencode_inspector_guidl.htm'\) "Guideline") and can otherwise only be used by calling a separate transaction, ATC is completely integrated into Object Navigator and Transport Organizer, and is available there for tests during development. ATC allows quality managers to perform mass tests. In the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), some tests are provided only from ATC.

Rule

Configure and use ABAP Test Cockpit correctly

If ABAP Test Cockpit is available in your system, make sure that an ATC run is performed on all involved development objects and that no messages are displayed before you release the objects for transport. The ATC check should be integrated directly into the transport release.

Details

ATC is a tool that can be used both by SAP developers and as part of central quality assurance management. For example, if a developer checks all development objects of a package in the development system using the same ATC configuration used by a quality manager as part of a mass run in a consolidation system, he can go ahead and correct all messages without having to wait for feedback from the quality manager.

If ATC is configured correctly, the above rule includes the previous rules for [syntax warnings](javascript:call_link\('abensyntax_check_guidl.htm'\) "Guideline"), [extended program checks](javascript:call_link\('abenextended_program_check_guidl.htm'\) "Guideline"), and [Code Inspector](javascript:call_link\('abencode_inspector_guidl.htm'\) "Guideline").

Notes

-   More specifically, the security checks in the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") can be executed and managed from ATC, which makes their integration into the transport release possible.

-   Outside of SAP, ATC is available from the following releases:

-   SAP NetWeaver AS ABAP 7.0, EhP2, Support Package 12

-   SAP NetWeaver AS ABAP 7.0, EhP3, Support Package 05

-   SAP NetWeaver AS ABAP 7.3, EhP1, Support Package 05

-   SAP NetWeaver AS ABAP 7.4, Support Package 02
