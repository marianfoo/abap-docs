---
title: "Syntax"
description: |
  <tt:variable name='...' ref-type='...' s-val='...'d-val='...'val='...' /> Effect The statement tt:variable can be used to declare one or more variables in an ST program outside of a template. The attribute name is used to declare a symbolic name, which can
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_variable.htm"
abapFile: "abenst_tt_variable.htm"
keywords: ["do", "if", "case", "method", "class", "data", "types", "abenst", "variable"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_st.htm) →  [ST - Structure of ST Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_programs_structure.htm) →  [ST - Data Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_data_declarations.htm) → 

ST - tt:variable, Variables

Syntax

<tt:variable name="..." *\[*ref-type="..."*\]*
                        *\[**\[*s-val="..."*\]**\[*d-val="..."*\]**\]**|**\[*val="..."*\]* />

Effect

The statement tt:variable can be used to declare one or more variables in an ST program outside of a template. The attribute name is used to declare a symbolic name, which can be used to access the variable. This name can have a maximum of 30 characters.

The symbolic name is not case-sensitive and must be unique. The namespace also includes the data roots declared with [tt:root](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_root.htm) and the parameters declared with [tt:parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_parameter.htm).

The variables in the context of the [main template](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_template_main.htm) can be addressed directly. The variables of the main template are not known in [subtemplates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_template_sub.htm).

Variables consist of data from the ST program, which in contrast to the data roots, are not bound to ABAP data objects.

ref-type can be used to define the variable as a reference variable. The value of ref-type determines the static type of the reference variable. All global ABAP classes and interfaces for an object reference variable are possible, as are data types for a data reference variable. The names of classes and interfaces are declared directly and without namespaces. The names of data types must be declared using an XML namespace that determines the context of the data type, as with [tt:type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_type.htm). Class reference variables and interface reference variables are intended primarily for creating objects and calling instance methods; data reference variables, however, are used for binding appropriately typed interface parameters when ABAP methods are called.

Use the additions s-val and d-val or val to assign a start value to any of the variables; specify the values as [ABAP values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_abap_representation.htm). s-val only works for serialization, d-val only works for deserialization, and val works for serialization and deserialization.

Within a template, the statement [tt:assign](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_assign.htm) is used to assign a value to a variable. The variables area accessed using the attribute var of the various [ST statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_statements.htm).