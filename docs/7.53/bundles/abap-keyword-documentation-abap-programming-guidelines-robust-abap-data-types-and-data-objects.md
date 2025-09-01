# ABAP Keyword Documentation / ABAP Programming Guidelines / Robust ABAP / Data Types and Data Objects

Included pages: 4


### abenusing_types_guidl.htm

---
title: "Using Types"
description: |
  Background You can use the data types declared according to the rules on Bound and Standalone Data Types(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbound_independent_dtype_guidl.htm 'Guideline') and Declaration of Data Types and Constants(https://help.sap.com/doc/abapdocu_753
version: "7.53"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenusing_types_guidl.htm"
abapFile: "abenusing_types_guidl.htm"
keywords: ["select", "do", "if", "case", "class", "data", "types", "field-symbol", "abenusing", "guidl"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrobust_abap_guidl.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_type_obj_guidl.htm) → 

Using Types

Background

You can use the data types declared according to the rules on [Bound and Standalone Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbound_independent_dtype_guidl.htm "Guideline") and [Declaration of Data Types and Constants](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclaration_dtypes_const_guidl.htm "Guideline") for declaring and creating data objects, as well as for typing field symbols or interface parameters. You specify them after the TYPE addition of the corresponding statement.

Rule

Use semantically appropriate data types only

Use existing types only if they match the semantics of the typed object. You must not select an existing type based only on the technical attributes.

Details

As long as it extends beyond an elemental ABAP type, the type of a data object or an interface parameter provides the source code reader with information about the semantics of these variables. This makes it easier to recognize the meaning of individual variables.

For this reason, you must use only data types whose semantics match the usage. The technical attributes of a type alone do not justify its use in a specific context, as this impedes the readability of the program.

In particular, this applies to the reuse or multiple use of existing types. If you require a data type with specific technical attributes for an application, you should not simply use any type with these attributes from ABAP Dictionary. In the past, this has frequently been the chosen procedure. Consequently applying package encapsulation may help prevent the unwanted use of own data types.

Note

This rule applies especially for the use of structures from ABAP Dictionary. For example, you should never use a structure defining a database table as a template for input or output fields of classic dynpros or in Web Dynpro. This would violate the [SoC principle](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenseperation_concerns_guidl.htm "Guideline").

Bad Example

In the following source code a variable is declared, whose name and use clearly indicate that it is used for a truth value. The variable is declared with a technically correct, but semantically incorrect, data type. syst-batch, after all, is the data type for the [system field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_fields_guidl.htm "Guideline") sy-batch, which indicates whether a program is executed in the background.

DATA is\_empty TYPE syst-batch.
...
IF is\_empty IS INITIAL.
  ...
ENDIF.

Good Example

The following source code shows an improved example compared to the source code above. In this case, the abap\_bool type of type group abap, which is intended for [truth values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendataobjects_true_value_guidl.htm "Guideline"), is used. In addition, the request of the truth value is performed using a specifically designated constant from the same type group.

DATA is\_empty TYPE abap\_bool.
...
IF is\_empty EQ abap\_false.
  ...
ENDIF.


### abentable_work_area_guidl.htm

---
title: "Table Work Areas"
description: |
  Background Table work areas are structured data objects of a flat structure type, a database table type, or a view type from ABAP Dictionary declared using the statements TABLES or NODES. If declared using NODES, other ABAP Dictionary types are also possible. From the perspective of the data type, t
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_work_area_guidl.htm"
abapFile: "abentable_work_area_guidl.htm"
keywords: ["select", "do", "if", "class", "data", "types", "abentable", "work", "area", "guidl"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrobust_abap_guidl.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_type_obj_guidl.htm) → 

Table Work Areas

Background

Table work areas are structured data objects of a flat structure type, a database table type, or a view type from ABAP Dictionary declared using the statements TABLES or NODES. If declared using NODES, other ABAP Dictionary types are also possible.

From the perspective of the data type, the statements

[TABLES table\_wa](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptables.htm).

[NODES table\_wa](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapnodes.htm).

are the same as

DATA table\_wa TYPE table\_wa.

This means that data objects with the same name and type as the corresponding data types from ABAP Dictionary are declared. This is supplemented by further meanings of TABLES and NODES. For the full range of meanings, refer to their documentation. The essential properties are as follows:

-   TABLES and NODES declare [interface work areas](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenintern_extern_proc_call_guidl.htm "Guideline"), which are shared by multiple programs of a program group.

-   TABLES declares interfaces to classic dynpros and selection screens.

-   NODES declares an interface to logical databases.

In addition, it is also possible to use table work areas declared using TABLES as implicit work areas in obsolete abbreviated forms of ABAP SQL, or even older statements for database accesses.

Rule

No table work areas except for classic dynpros

Only use the statement TABLES in the global declaration part of function groups to communicate with classic dynpros. Apart from in wrappers of logical databases, the statement NODES is no longer required.

Details

The statement TABLES is not allowed within classes anyway and, in the syntax, the statement NODES can only be created in the global declaration part of an executable program associated with a logical database. The latter option is [no longer allowed](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_attribute_guidl.htm "Guideline").

Since obsolete database accesses requiring the statement TABLES and shared data areas between programs are not allowed, there is no need to use the statement TABLES, except for declaring interfaces to classic dynpros (see the following exception).

Exception

If dynpro fields in [classic dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_interfaces_guidl.htm "Guideline") are defined with reference to flat structures in ABAP Dictionary, the identically named global data objects of the ABAP program must be declared with the statement TABLES. Otherwise, the data objects of the ABAP program are not linked to the dynpro fields, and their content cannot be accessed. In addition, TABLES is also required for declaring specific work areas when handling function codes of selection screens.

Note

The restriction on the statement TABLES to this last remaining technical requirement, that is, the communication with classic dynpros and selection screens, can also be derived from other rules of these guidelines. However, since the use of the statement TABLES instead of the statement DATA is still very popular among experienced ABAP developers, the rule above explicitly stresses that it is not allowed.


### abenstrings_guidl.htm

---
title: "Strings"
description: |
  Background Strings are dynamic data objects(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuse_dyn_data_object_guidl.htm 'Guideline') of variable length. There are text strings of the string data type and byte strings of the xstring data type, in which character strings or byte str
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstrings_guidl.htm"
abapFile: "abenstrings_guidl.htm"
keywords: ["do", "if", "case", "data", "types", "internal-table", "abenstrings", "guidl"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrobust_abap_guidl.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_type_obj_guidl.htm) → 

Strings

Background

Strings are [dynamic data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuse_dyn_data_object_guidl.htm "Guideline") of variable length. There are text strings of the string data type and byte strings of the xstring data type, in which character strings or byte strings can be saved.

In contrast to text and byte fields of a fixed length (c, x data types), the length of strings automatically adapts to the content. Other data types, such as n, d, and t, are also handled as text fields in many operand positions. Strings are deep data objects that are internally managed by references. For this, the following additional memory is required:

-   Strings whose length is less than approximately 30 characters or 60 bytes require between approximately 10 and 40 bytes of additional memory, depending on the string length.

-   For longer strings, the additional memory requirement is approximately 50 bytes, irrespective of the string length.

In the case of assignments between strings, sharing takes effect. This means that only the internal reference is copied first. Sharing is canceled if the source or target object is accessed for modification.

Rule

Use strings in character string and byte string processing

Use strings rather than fixed length fields for the internal saving and processing of character strings and byte strings.

Details

Strings are more flexible than fields of a fixed length and usually help to save memory space, because no unnecessary space is occupied by blanks or zeroes, and because sharing is implemented for assignments. Furthermore, trailing blanks are always significant in text strings. Text fields simply ignore trailing blanks in many operand positions (but not in all), which may be quite confusing at times.

Exception

In the following cases, fields of a fixed length should be used instead of strings:

-   The length of the field is critical, for example, for templates or for interfaces to screen fields.

-   Despite [sharing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadmin_costs_dyn_mem_obj_guidl.htm "Guideline"), the additional administration work outweighs the benefits which can often be the case for very short strings. If it is obvious that a certain length is never exceeded, short fields of a fixed length can also be used.

-   Structures that only contain character-like components should be handled like a single text field. This is not possible for structures that contain text strings.

Bad Example

The following source code shows an internal table for saving an HTML page whose row type is a text field with a fixed length of 255. Most of the memory space of the internal table, however, is probably wasted on blanks.

TYPES html\_line TYPE c LENGTH 255.
DATA html\_table TYPE TABLE OF html\_line.
APPEND '<HTML>' TO html\_table.
...
APPEND '<BODY>' TO html\_table.
...
APPEND '</BODY>' TO html\_table.
APPEND '</HTML>' TO html\_table.

Good Example

The following source code shows the above example but uses text strings. The memory space gained should outweigh the additional administration effort considerably. As an alternative to using an internal table, the HTML page can also be concatenated in a single text string; however, this makes it more difficult to read, for example, in the ABAP Debugger.

DATA html\_table TYPE TABLE OF string.
APPEND \`<HTML>\` TO html\_table.
...
APPEND \`<BODY>\` TO html\_table.
...
APPEND \`</BODY>\` TO html\_table.
APPEND \`</HTML>\` TO html\_table.


### abenstart_values_guidl.htm

---
title: "Start Values"
description: |
  Background If you declare a data object with the statement DATA, you can use the addition VALUE(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_options.htm) to set a value, with which the data object is filled when it is created. If the addition VALUE is not used, the system us
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstart_values_guidl.htm"
abapFile: "abenstart_values_guidl.htm"
keywords: ["do", "if", "case", "method", "data", "types", "abenstart", "values", "guidl"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrobust_abap_guidl.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_type_obj_guidl.htm) → 

Start Values

Background

If you declare a data object with the statement DATA, you can use the addition [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_options.htm) to set a value, with which the data object is filled when it is created. If the addition VALUE is not used, the system uses the type-dependent initial value. If the statement CONSTANTS is used, the addition VALUE must always be specified. If the type-dependent initial value is required here, this can be achieved using the addition VALUE IS INITIAL. The addition [DEFAULT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_parameters.htm) for input parameters of methods is a further option for start values.

If the specified start value does match the type and length of the data object, the value is converted when the program is generated.

Rule

Start values must match the data type of the data object

Only use the addition VALUE to enter start values that exactly match the data type of the declared data object in terms of type, content, and length.

Details

The start value cannot always be specified in a type-friendly way, since ABAP does not support type-friendly [literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenliterals_guidl.htm "Guideline") for all possible data types. In all cases where a conversion cannot be avoided, choose the content of literals specified as start values so that the actual value meets the requirements when the source code is read.

Note

If a start value cannot be converted to the data type of the data object, no syntax error occurs and program generation is canceled at activation time instead. Non-convertible start values for input parameters of methods, in fact, are not detected until the method is called. This can only occur, however, when literals are specified.

Bad Example

The average reader may well expect the constant high\_noon in the following source code to contain the value 120000. However, the constant actually contains the value 092000, because the value of the numeric literal refers to the number of seconds. This means 12,000 seconds is actually the time 09:20 on the following day.

CONSTANTS high\_noon TYPE t VALUE 120000.

Good Example

The following source code corrects the above example by replacing the numeric literal with a text field literal. Now the constant high\_noon contains the expected value 120000.

CONSTANTS high\_noon TYPE t VALUE '120000'.
