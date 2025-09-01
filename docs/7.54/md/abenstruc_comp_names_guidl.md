---
title: "Names of Structure Components"
description: |
  Background When ABAP programs are executed, the names of data objects usually only have the task of identifying the data objects uniquely. The ABAP statements operate directly with the objects in question without attaching any special meaning to their names. The names of structure components are an
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstruc_comp_names_guidl.htm"
abapFile: "abenstruc_comp_names_guidl.htm"
keywords: ["select", "do", "if", "case", "class", "data", "types", "internal-table", "abenstruc", "comp", "names", "guidl"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstructure_style_guidl.htm) →  [Naming](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennaming_guidl.htm) → 

Names of Structure Components

Background

When ABAP programs are executed, the names of data objects usually only have the task of identifying the data objects uniquely. The ABAP statements operate directly with the objects in question without attaching any special meaning to their names. The names of structure components are an exception here. They are evaluated in the following cases:

-   When structure components are assigned using

-   the statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove-corresponding.htm)

-   the component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expr_corresponding.htm)

-   the system class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_corresponding.htm)

-   In ABAP SQL, in the addition [CORRESPONDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm)

-   In [obsolete calculation statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomputing_obsolete.htm) like [ADD-CORRESPONDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapadd-corresponding.htm)

In these language constructs, the names of the components of the structures in question are compared and the operation is executed using the identically named components (if not overridden by a mapping rule).

Rule

Give structure components with the same meaning the same names

Give the components of structures that have the same meaning within a data model the same names

Details

This rule mainly applies to data models defined in ABAP Dictionary (including ABAP CDS). If one of the CORRESPONDING constructs above is used in an ABAP program to access structures or structured internal tables (and the structured types of these structures or tables are defined like database tables or CDS entities using types from the data model in ABAP Dictionary), it is essential that components from different structures but with the same semantics have the same name.

Bad Example

The database tables DOKIL DOKHL, and DOKTL are in the same package and the same application. The column whose type is determined by the data element DOKVERS has the same name (DOKVERSION) in DOKHL and DOKTL, but the name in DOKIL is VERSION.

Good Example

Columns of the familiar structures used in the flight data model in training and documentation that have the same semantics usually also have the same names.