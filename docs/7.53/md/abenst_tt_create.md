---
title: "Syntax"
description: |
  <tt:create-object var='oref' class='class'> <tt:with-parameter name='para1' ref='node1'val='val1'var='var1' /> <tt:with-parameter name='para2' ref='node2'val='val2'var='var2' /> ... </tt:call-method> Effect The statement tt:create-object can be used to ca
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_create.htm"
abapFile: "abenst_tt_create.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "abenst", "create"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_st.htm) →  [ST - Access to ABAP Objects from ST](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_abap_objects.htm) → 

ST - tt:create-object, Create Objects

Syntax

<tt:create-object var="oref" *\[*class="class"*\]*\>
  *\[*<tt:with-parameter name="para1"
                      *\[*ref="node1"*|*val="val1"*|*var="var1"*\]* />
   <tt:with-parameter name="para2"
                      *\[*ref="node2"*|*val="val2"*|*var="var2"*\]* />
   ...*\]*
</tt:call-method>

Effect

The statement tt:create-object can be used to call an instance of a global ABAP Objects class in an ST program. var can be used to specify a [variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_variable.htm) or a [parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_parameter.htm) of the ST program. The variable or parameter must have been created as a class reference variable or an interface reference variable with the addition ref-type.

The object is created in the [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the ABAP program that called the ST program. If the attribute class is not specified, var must be a class reference variable and an instance of the relevant class is created. If the attribute class is specified, an instance of the specified class is created. A global class from the ABAP class library can be specified for class, either more special or the same as the static type of the reference variable var:

-   If var is a class reference variable, class must be the class or subclass of the class of var.

-   If var is an interface reference variable, class must implement the interface of var.

The interface parameters para1, para2, ... of the instance constructor of the class of the object can or must be bound to actual parameters, using the ST command tt:with-parameter. The same rules apply here as to regular [method calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_call-method_static.htm). Constructor exceptions are also handled in the same way as exceptions for regular method calls.

After the object has been created, the reference variable var points to the object and can be used to call instance methods.

Example

The following simple transformation uses the variable ovar to create an object of the class cls. When doing this, it passes the data root PARA to the parameter repl of its instance constructor. The method convert is then called, whose input/output parameter is assigned the variable result. Note that a data root cannot be assigned to an input/output parameter, either in serializations or in deserializations.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:root name="PARA"/>
  <tt:variable name="ovar" ref-type="cls"/>
  <tt:variable name="result"/>
  <tt:template>
    <tt:create-object var="ovar">
      <tt:with-parameter name="repl" ref="PARA"/>
    </tt:create-object>
    <tt:assign ref="ROOT" to-var="result"/>
    <tt:call-method s-name="convert" var="ovar">
      <tt:with-parameter name="text" var="result"/>
    </tt:call-method>
    <Result>
      <tt:write var="result"/>
    </Result>
  </tt:template>
</tt:transform>

The following is an example of a calling ABAP program:

DATA xml\_string TYPE string.
DATA text       TYPE string VALUE '1 2 3'.
DATA repl       TYPE string value '\*'.
DATA exc        TYPE REF TO cx\_st\_call\_method\_error.
TRY.
    CALL TRANSFORMATION ...
      SOURCE root = text
             para = repl
      RESULT XML xml\_string.
      cl\_abap\_browser=>show\_xml( xml\_string = xml\_string ).
  CATCH cx\_st\_call\_method\_error INTO exc.
    ...
ENDTRY.

The constructor and the method convert of the class cls are defined as follows:

METHOD constructor.
  me->repl = repl.
ENDMETHOD.
METHOD convert.
  REPLACE ALL OCCURRENCES OF \` \` IN text WITH repl.
ENDMETHOD.

The result of the transformation is as follows:

<Result>1\*2\*3</Result>