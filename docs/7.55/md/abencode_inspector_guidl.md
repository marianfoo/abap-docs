---
title: "Code Inspector"
description: |
  Background The Code Inspector tool performs a static check of repository objects regarding performance, security, syntax, and adherence to naming conventions. Transaction SCI can be called to use the full range of functions of Code Inspector to perform complex static checks and regular mass tests fo
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencode_inspector_guidl.htm"
abapFile: "abencode_inspector_guidl.htm"
keywords: ["select", "loop", "do", "if", "case", "method", "class", "data", "types", "internal-table", "abencode", "inspector", "guidl"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [ABAP-Specific Rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_specific_rules_guidl.htm) →  [Checks for Correctness](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencheck_correctness_guidl.htm) → 

Code Inspector

Background

The Code Inspector tool performs a static check of repository objects regarding performance, security, syntax, and adherence to naming conventions. Transaction SCI can be called to use the full range of functions of Code Inspector to perform complex static checks and regular mass tests for large numbers of development objects.

Code Inspector can also be called from ABAP Workbench to perform a standard set of checks for the current object, for example by choosing Program → Check → Code Inspector in ABAP Editor. The standard check variant used here contains most of the checks from the [extended program check](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenextended_program_check_guidl.htm "Guideline"), as well as a few additional security and performance checks. Code Inspector can also be integrated into the release of transports.

As in the extended program check, the results of Code Inspector are divided into three categories (errors, warnings, and simple messages), which you can hide using special pseudo comments.

Rule

Use the standard check variant of Code Inspector

Perform the standard check variant of Code Inspector before releasing a program, and correct all error messages.

Details

If the [extended program check](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenextended_program_check_guidl.htm "Guideline") is used, the standard check variant of Code Inspector only reports messages and checks that are not covered by the extended program check. These are mainly messages relating to potential performance or security risks in programs. Examples are messages about unfavorable WHERE conditions in a SELECT, a pass by value instead of a pass by reference for parameters, or non-secure program calls.

Compared with the messages of the extended program check, it is not always so easy to correct these problems at their source, perhaps because there is no other option for a selection, or because the transparency or robustness of a construct is seen as more important than a small potential loss of performance.

In such cases, the messages can be suppressed using the appropriate pseudo comments. A pseudo comment is a clear indication to the reader of a program that the program author has performed the relevant checks and has explicitly suppressed the message for a good reason. If necessary, pseudo comments can be substantiated by additional normal [comments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomments_guidl.htm "Guideline").

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