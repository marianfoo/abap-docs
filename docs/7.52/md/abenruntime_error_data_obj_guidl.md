---
title: "Runtime Errors When Accessing Data Objects"
description: |
  Background Using data objects can cause runtime errors if the data object contains unsuitable content or the access to the data object is unsuitable. Examples: -   Assigning values outside the value range of a target variable -   Using values that cannot be converted to the required type. In other w
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenruntime_error_data_obj_guidl.htm"
abapFile: "abenruntime_error_data_obj_guidl.htm"
keywords: ["do", "if", "try", "catch", "class", "data", "types", "exception-handling", "abenruntime", "error", "obj", "guidl"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrobust_abap_guidl.htm) →  [Assignments, Calculations, and Other Types of Data Access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassignment_access_guidl.htm) → 

Runtime Errors When Accessing Data Objects

Background

Using data objects can cause runtime errors if the data object contains unsuitable content or the access to the data object is unsuitable. Examples:

-   Assigning values outside the value range of a target variable

-   Using values that cannot be converted to the required type. In other words, a conversion rule exists but the source field content is not convertible. For example, you are trying to assign a character field (with content that cannot be interpreted as a number) to a numeric field.

-   Access to parts of data objects (substring access). Either offset access/length access or the use of predefined subfunctions such as substring.

Rule

Prevent runtime errors when accessing data objects

You need to prevent runtime errors that can occur when accessing data objects. Robust applications should always be programmed to avoid these errors.

Details

If it is not possible to determine whether subsequent access causes errors by filling data objects appropriately, either the relevant properties must be checked before the data is accessed or possible exceptions (subclasses of CX\_SY\_CONVERSION\_ERROR or CX\_SY\_DATA\_ACCESS\_ERROR) must be caught during data access.

Bad Example

The following source code illustrates a typical situation that can easily cause a runtime error if the subarea defined by offset and length is not defined in text.

DATA text TYPE string.
...
substring = text+offset(length).
...

Good Example

The following two pieces of source code illustrate how the above example can be changed to avoid runtime errors using prevention or exception handling.

IF strlen( text ) > offset + length.
  substring = text+offset(length).
ELSE.
  ...
ENDIF.

TRY.
  substring = text+offset(length).
CATCH cx\_sy\_range\_out\_of\_bounds.
   ...
ENDTRY.