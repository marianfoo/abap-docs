  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [ABAP-Specific Rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_specific_rules_gdl.htm) →  [Checks for Correctness](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencheck_correctness_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Extended%20Program%20Check%2C%20ABENEXTENDED_PROGRAM_CHECK_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Extended Program Check

Background   

You can call the [extended program check](https://help.sap.com/docs/ABAP_PLATFORM_NEW/bd833c8355f34e96a6e83096b38bf192/d1801afd454211d189710000e8322d00) for activated programs either from ABAP Workbench or by using transaction SLIN. It performs static checks that are too complex for the regular syntax check. Both individual and multiple subtests can be performed, or an ATC-relevant check that includes important subtests.

The extended program check reports errors, warnings and messages. The ATC-relevant check reports errors and warnings that are particularly critical. These checks are also performed in program checks in [ABAP Test Cockpit (ATC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_test_cockpit_glosry.htm "Glossary Entry"). The classification of individual results (error, warning or message) depends on whether an ATC-relevant check is performed or explicitly selected individual checks. The extended program check also reports the errors and warnings of the syntax check.

In the initial screen of the extended program check, a programming guidelines check can also be selected. This checks whether certain rules presented in this book (that can be verified statically) have been adhered to.

The messages from the extended program check, which are inapplicable in some special cases, can be hidden using pragmas. Before the introduction of pragmas, it was not possible to hide messages raised by a regular syntax check.

Hint

The extended program check also covers security checks used to test ABAP programs for all potential [security risks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_security.htm). In customer systems, these checks are subject to a special licensing procedure.

Rule   

Use the extended program check

Use the extended program check and take the results seriously. Message are not allowed to appear when the ATC-relevant checks are performed for a completed program.

Details   

The errors, warnings and messages output by the extended program check are just as important as the syntax errors and syntax warnings from the [syntax check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensyntax_check_guidl.htm "Guideline"). For example, an error reported by the extended program check can indicate that a program will definitely lead to a runtime error when it is executed. Warnings and messages usually indicate a questionable use of language elements, which is likely to cause unexpected program behavior.

In rare cases, when a result reported by the extended program check is not justified, this must be documented using an appropriate pragma (the relevant pragma is indicated in the message). This means that the system suppresses the message of the extended program check. Ideally, in less obvious situations, an additional comment should be used to describe why the message is not applicable.

Hint

The extended program check provides useful help for writing ABAP programs in the correct way. Using unspecific pseudo comments or pragmas can undo the positive effect of the extended program check. In particular, the following statement should never be used:

SET EXTENDED CHECK OFF.

This statement suppresses all messages of the extended program check for an entire source code section.

If the ABAP program is submitted to a code review, the results of the extended program check should be used to evaluate the quality.

Bad Example

If the following source code is checked using the extended program check, a warning appears. It indicates a particularly questionable query of the content of the [return code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreturn_code_guidl.htm "Guideline") sy-subrc.

ASSIGN field TO <fs>.
IF sy-subrc <> 0.
  ...
ENDIF.

The program section shows a typical error in a program with correct syntax. The developer wrongly assumes that the static form of the ASSIGN statement sets the sy-subrc system field, which is not the case. The developer wrongly believes that the program is secured. An incorrect program behavior occurs if sy-subrc has a value that is not zero, due to previous statements. Therefore, the main advantage of the extended program check is that the system does not just examine individual statements for correct syntax, but it also examines entire program sections for semantic errors.

Good Example

The following source code shows the corrected version of the above example. The predicate expression IS ASSIGNED is used (as recommended in the documentation) instead of sy-subrc. The message from the extended program check could also be hidden using a pragma (##subrc\_read), but this is not recommended in this case because the extended program check indicates a real problem.

ASSIGN field TO <fs>.
IF <fs> IS ASSIGNED.
  ...
ENDIF.