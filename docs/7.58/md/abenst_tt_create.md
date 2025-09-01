  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_st.htm) →  [ST - Access to ABAP Objects from ST](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_abap_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20tt%3Acreate-object%2C%20Create%20Objects%2C%20ABENST_TT_CREATE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ST - tt:create-object, Create Objects

Syntax

<tt:create-object var="oref" *\[*class="class"*\]*\>
  *\[*<tt:with-parameter name="para1"
                      *\[*ref="node1"*|*val="val1"*|*var="var1"*\]* />
   <tt:with-parameter name="para2"
                      *\[*ref="node2"*|*val="val2"*|*var="var2"*\]* />
   ...*\]*
</tt:create-object>

Effect

The statement tt:create-object can be used to create an instance of a global ABAP Objects class in an ST program. var can be used to specify a [variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_variable.htm) or a [parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_parameter.htm) of the ST program. The variable or parameter must have been created as a class reference variable or an interface reference variable with the addition ref-type.

The object is created in the [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the ABAP program that called the ST program. If the attribute class is not specified, var must be a class reference variable and an instance of the corresponding class is created. If the attribute class is specified, an instance of the specified class is created. A global class from the ABAP class library can be specified for class, either more special or the same as the static type of the reference variable var:

-   If var is a class reference variable, class must be the class or subclass of the class of var.
-   If var is an interface reference variable, class must implement the interface of var.

The interface parameters para1, para2, ... of the instance constructor of the class of the object can or must be bound to actual parameters, using the ST statement tt:with-parameter. The same rules apply here as to regular [method calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_call-method_static.htm). Constructor exceptions are also handled in the same way as exceptions for regular method calls.

After the object has been created, the reference variable var points to the object and can be used to call instance methods.

Example

The transformation DEMO\_ST\_WITH\_CREATE\_OBJECT uses the variable ovar to create an object of class CL\_DEMO\_CREATE\_FROM\_ST and passes the data root PARA to the parameter REPL of its instance constructor. The method CONVERT is then called, whose input/output parameter is assigned the variable result. Note that a data root cannot be assigned to an input/output parameter, neither in serializations nor in deserializations.

<?sap.transform simple?>
<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:root name="PARA"/>
  <tt:variable name="ovar" ref-type="CL\_DEMO\_CREATE\_FROM\_ST"/>
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

The transformation is called in class CL\_DEMO\_CREATE\_OBJECT\_FROM\_ST. The constructor of class CL\_DEMO\_CREATE\_FROM\_ST is defined as follows:

METHOD constructor.
me->repl = repl.
ENDMETHOD.

The method CONVERT is defined as follows:

METHOD convert.
  REPLACE ALL OCCURRENCES OF \` \` IN text WITH repl.
ENDMETHOD.

The result of the transformation is as follows:

<Result>1\*2\*3</Result>