---
title: "Syntax"
description: |
  <tt:call-method var='oref' s-d-name='meth' writer = 'writer_para' reader = 'reader_para' > <tt:with-parameter s-d-name='para1' ref='node1'val='val1'var='var1' /> <tt:with-parameter s-d-name='para2' ref='node2'val='val2'va
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_call-method_instance.htm"
abapFile: "abenst_tt_call-method_instance.htm"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "abenst", "call", "instance"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_st.htm) →  [ST - Access to ABAP Objects from ST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_abap_objects.htm) → 

ST - tt:call-method, Calling Instance Methods

Syntax

<tt:call-method var="oref" *\[*s-*|*d-*\]*name="meth"
                           *\[*writer = "writer\_para"*\]*
                           *\[*reader = "reader\_para"*\]* >
  *\[*<tt:with-parameter *\[*s-*|*d-*\]*name="para1"
                      *\[*ref="node1"*|*val="val1"*|*var="var1"*\]* />
   <tt:with-parameter *\[*s-*|*d-*\]*name="para2"
                      *\[*ref="node2"*|*val="val2"*|*var="var2"*\]* />
   ...*\]*
</tt:call-method>

Effect

Using this variant of the statement tt:call-method, it is possible to call an instance method of a global ABAP Objects class in an ST program as follows: var can be used to specify a [variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_variable.htm) or a [parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_parameter.htm) of the ST program. The addition ref-type must have been used to create the variable or parameter as a class reference variable or interface reference variable. When called, the variable or parameter must point to the object of a class. The object can have been created either in the ST program using [tt:create-object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_create.htm), or it is referred to a corresponding ABAP reference variable.

meth can be used to specify a visible method that exists in the static type of the reference variable, that is in the class or interface. If specified, the method is not case-sensitive.

Method execution, parameter passing, and optional attributes are subject to the same conditions as [static method calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_call-method_static.htm).

Example

The following transformation calls an instance method convert in an object that is referenced by the parameter OPAR. This is passed to the input parameter input of the method and its return code result is assigned to a variable with the same name. The variable result is then serialized using [tt:write](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_write.htm). Note that no data root can be assigned to the return code of the method in serializations.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:parameter name="OPAR" ref-type="cls"/>
  <tt:variable name="result"/>
  <tt:template>
    <tt:call-method s-name="convert" var="OPAR">
      <tt:with-parameter name="input" ref="ROOT"/>
      <tt:with-parameter name="result" var="result"/>
    </tt:call-method>
    <Result>
      <tt:write var="result"/>
    </Result>
  </tt:template>
</tt:transform>

The following is an example of a calling ABAP program:

DATA xml\_string TYPE string.
DATA oref TYPE REF TO cls.
DATA text       TYPE string VALUE '1 2 3'.
DATA exc        TYPE REF TO cx\_st\_call\_method\_error.
CREATE OBJECT oref.
TRY.
    CALL TRANSFORMATION ...
      SOURCE root = text
      PARAMETERS opar = oref
      RESULT XML xml\_string.
      cl\_abap\_browser=>show\_xml( xml\_string = xml\_string ).
  CATCH cx\_st\_call\_method\_error INTO exc.
    ...
ENDTRY.

A reference to an object of the required class is passed using the addition PARAMETERS.

The method convert of the class cls is defined as follows:

METHOD convert.
  result  = input.
  REPLACE ALL OCCURRENCES OF \` \` IN result WITH \`-\`.
ENDMETHOD.

The result of the transformation is as follows:

<Result>1-2-3</Result>