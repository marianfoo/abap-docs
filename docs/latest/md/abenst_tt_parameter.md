  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_st.htm) →  [ST - Structure of ST Programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_programs_structure.htm) →  [ST - Data Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_data_declarations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20tt%3Aparameter%2C%20Parameters%2C%20ABENST_TT_PARAMETER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ST - tt:parameter, Parameters

Syntax

<tt:parameter name="..." *\[*ref-type="..."*\]*
                         *\[*kind="..."*\]*
                         *\[**\[*s-val="..."*\]**\[*d-val="..."*\]**\]**|**\[*val="..."*\]* />

Effect

The statement tt:parameter can be used to declare one or more parameters in an ST program outside of a template. The attribute name is used to define a symbolic name that can be used to access the parameter. This name can have a maximum of 30 characters.

The symbolic name is not case-sensitive and must be unique. The namespace also includes the data roots declared with [tt:root](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_root.htm) and the variables declared with [tt:variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_variable.htm).

The parameters can be addressed directly in the context of the [main template](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_template_main.htm). In [subtemplates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_template_sub.htm), the parameters of the main template are not known.

Parameters are special [variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_variable.htm) and can be used as such. Parameters are also applied as formal parameters of an ST program (or a subtemplate):

-   In [tt:call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_call.htm) (or [tt:apply](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_apply.htm)), a current value can be assigned to a parameter with tt:with-parameter.
-   The addition PARAMETERS of the ABAP statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transformation.htm) can be used to assign an ABAP data object to a parameter as an actual parameter.

ref-type can be used to define the formal parameter as a reference variable. The value of ref-type determines the static type of the reference variable. All global ABAP classes and interfaces for an object reference variable are possible, as are data types for a data reference variable. The names of classes and interfaces are specified directly and without namespaces. The names of data types must be specified using an XML namespace that determines the context of the data type, as with [tt:type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_type.htm). Class reference variables and interface reference variables are intended primarily for creating objects and calling instance methods. Data reference variables, however, are used for binding appropriately typed interface parameters when ABAP methods are called.

kind can be used to specify the category of formal parameter. Possible values for kind are:

-   in input parameter - In the call, an input parameter uses the value of the assigned actual parameter. In the return, the actual parameter does not use the current value of the formal parameter.
-   out output parameter - In the call, an output parameter does not use the values of the assigned actual parameter. In the return, the actual parameter uses the current value of the formal parameter.
-   in/out  input/output parameter - In the call, an input/output parameter uses the value of the assigned actual parameter and, in the return, the actual parameter uses the current value of the formal parameter.

If kind is not specified, the formal parameter is by default an input parameter.

The additions s-val and d-val or val can be used to assign a replacement value to each the input parameters, where the values are specified as [ABAP values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_abap_representation.htm). If no actual parameter is assigned to an input parameter, it is set to the replacement value. s-val only takes effect in serializations, d-val only takes effect in deserializations, and val takes effect in both serializations and deserializations. Replacement values cannot be assigned to output parameters and input/output parameters.

Example

This example demonstrates how parameters are passed to a called transformation. The same example is used for subtemplates in the statement [tt:apply](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_apply.htm).

The transformation DEMO\_ST\_PARAMETER1 below has three parameters PARA1, PARA2, and PARA3.

<?sap.transform simple?>
<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:parameter kind="in" name="PARA1" val="4"/>
  <tt:parameter kind="out" name="PARA2"/>
  <tt:parameter kind="in/out" name="PARA3"/>
  <tt:template>
    <tt:assign to-var="PARA2" var="PARA3"/>
    <tt:assign to-var="PARA3" var="PARA1"/>
    <tt:assign to-var="PARA1" val="555"/>
  </tt:template>
</tt:transform>

It can be called from the transformation DEMO\_ST\_PARAMETER2 below:

<?sap.transform simple?>
<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:variable name="VARI1" val="1"/>
  <tt:variable name="VARI2" val="2"/>
  <tt:variable name="VARI3" val="3"/>
  <tt:template>
    <tt:call transformation="demo\_st\_parameter1">
      <tt:with-parameter name="PARA1" var="VARI1"/>
      <tt:with-parameter name="PARA2" var="VARI2"/>
      <tt:with-parameter name="PARA3" var="VARI3"/>
    </tt:call>
    <X1>
      <tt:write var="VARI1"/>
    </X1>
    <X2>
      <tt:write var="VARI2"/>
    </X2>
    <X3>
      <tt:write var="VARI3"/>
    </X3>
  </tt:template>
</tt:transform>

The result of the calling transformation is:

<X1>1</X1>
<X2>3</X2>
<X3>1</X3>

The input parameter PARA1 is changed in the called transformation, but the changed value is not returned to the actual parameter VARI1.

The output parameter PARA2 is set to the value of actual parameter VARI3, which is passed to the called transaction, and this value is returned to the actual parameter VARI2.

The input/output parameter PARA3 is set to the value of actual parameter VARI1, which is passed to the called transaction, and this value is returned to the actual parameter VARI3.