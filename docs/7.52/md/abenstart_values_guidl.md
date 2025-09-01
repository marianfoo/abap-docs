---
title: "Start Values"
description: |
  Background If you declare a data object with the statement DATA, you can use the addition VALUE to set a value, with which the data object is filled when it is created. If the addition VALUE is not used, the system uses the type-dependent initial value. If the statement CONSTANTS is used, the additi
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstart_values_guidl.htm"
abapFile: "abenstart_values_guidl.htm"
keywords: ["do", "if", "case", "data", "types", "abenstart", "values", "guidl"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrobust_abap_guidl.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_type_obj_guidl.htm) → 

Start Values

Background

If you declare a data object with the statement DATA, you can use the addition VALUE to set a value, with which the data object is filled when it is created. If the addition VALUE is not used, the system uses the type-dependent initial value. If the statement CONSTANTS is used, the addition VALUE must always be specified. If the type-dependent initial value is required here, this can be achieved using the addition VALUE IS INITIAL.

If the specified start value does match the type and length of the data object, the value is converted when the program is generated.

Rule

Start values must match the data type of the data object

Only use the addition VALUE to enter start values that exactly match the data type of the declared data object in terms of type, content, and length.

Details

The start value cannot always be specified in a type-friendly way, since ABAP does not support type-friendly [literals](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenliterals_guidl.htm "Guideline") for all possible data types. In all cases where a conversion cannot be avoided, choose the content of literals specified as start values so that the actual value meets the requirements when the source code is read.

Bad Example

The average reader may well expect the constant high\_noon in the following source code to contain the value 120000. However, the constant actually contains the value 092000, because the value of the numeric literal refers to the number of seconds. This means 12,000 seconds is actually the time 09:20 on the following day.

CONSTANTS high\_noon TYPE t VALUE 120000.

Good Example

The following source code corrects the above example by replacing the numeric literal with a text field literal. Now the constant high\_noon contains the expected value 120000.

CONSTANTS high\_noon TYPE t VALUE '120000'.