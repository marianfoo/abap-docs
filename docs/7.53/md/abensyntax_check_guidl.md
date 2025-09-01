---
title: "Syntax Check"
description: |
  Background The syntax check provides syntax errors and syntax warnings: -   As soon as a syntax error occurs, the system stops the check and displays the relevant error message. In many cases, the system suggests a correction that can be applied. Programs with syntax errors can be activated, but the
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensyntax_check_guidl.htm"
abapFile: "abensyntax_check_guidl.htm"
keywords: ["select", "do", "if", "case", "class", "data", "internal-table", "abensyntax", "check", "guidl"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [ABAP-Specific Rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_specific_rules_guidl.htm) →  [Checks for Correctness](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencheck_correctness_guidl.htm) → 

Syntax Check

Background

The syntax check provides syntax errors and syntax warnings:

-   As soon as a syntax error occurs, the system stops the check and displays the relevant error message. In many cases, the system suggests a correction that can be applied. Programs with syntax errors can be activated, but they cannot be generated and executed. In the extended program check, the syntax errors are reported as fatal errors. Syntax errors must be corrected at all costs.

-   If a syntax warning occurs, the syntax check is not terminated. The program can still be executed. The syntax warnings are displayed in ABAP Editor after the syntax check and the [extended program check](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextended_program_check_guidl.htm "Guideline"). Of course, testing tools that include the checks of the extended program check (such as Code Inspector and ABAP Test Cockpit) also display syntax warnings. When a program is activated, the system only displays syntax warnings if syntax errors have occurred at the same time. The warnings reported by the syntax check are subdivided into three priorities that are only displayed by the extended program check:

-   Priority 1
    Errors that could cause program termination if the ABAP program is executed. This priority also includes all constructs that should not be used at all, because they indicate program errors and are very likely to make the program behave incorrectly.

-   Priority 2
    This priority refers to all constructs that do not necessarily cause incorrect behavior, but are obsolete, for example, and should be replaced by current constructs. Priority 2 errors can become priority 1 errors or syntax errors in future releases.

-   Priority 3
    Includes all errors where correction would be beneficial, but not necessarily essential, for the current release. However, the possibility of raising the priority in future releases is not ruled out.

The [severity of the ABAP syntax check](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogr_type_features_guidl.htm "Guideline") is determined by the decisions that were made when the program was created. As a result, program constructs that only cause syntax warnings outside of classes can actually indicate real syntax errors within classes. Selected syntax warnings can be suppressed by using pragmas. A pragma is a program directive that affects specific checks but does not influence the program flow.

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