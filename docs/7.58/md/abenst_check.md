  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_serial_deserial.htm) →  [ST - Flow Control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_flow_control.htm) →  [ST - tt:cond, Conditional Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_cond.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20check%2C%20Conditions%2C%20ABENST_CHECK%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ST - check, Conditions

Syntax

... *\[*s-*|*d-*\]*check ="..." ...

Effect

The following conditions can be specified for the content of the attribute *\[*s-*|*d-*\]*check of an element [tt:cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_cond.htm) or [tt:cond-var](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_cond-var.htm):

State Queries   

Condition

Meaning

exist(node)

Met if an ABAP data object is bound to the node.

*\[*not-*\]*initial(node)

Met if the bound ABAP data object is (not) initial.

*\[*not-*\]*initial(var(variable))

Met if the variable is (not) initial.

The operands of the conditions can be data nodes, variables, or values.

-   Data nodes node are specified in a [special form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_addressing_nodes_in_cond.htm).
-   Variables are specified in the form var(variable), where variable is a [variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_variable.htm) or a [parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_parameter.htm).
-   Values value are ABAP values in the associated [representation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_abap_representation.htm).

Data nodes cannot be specified as operands if check is specified as an attribute of [tt:cond-var](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_cond-var.htm).

Comparisons   

Comparisons are specified in the form:

node*|*var(variable)*|*value operator node*|*var(variable)*|*value

The following operators operator are possible:

operator

Meaning

\=

Met if both operands have the same value.

!=

Met if both operands do not have the same value.

\>, &gt;

Met if the value of the left operand is greater than that of the right operand.

\>=, &gt;=

Met if the value of the left operand is greater than or equal to that of the right operand.

&lt;

Met if the value of the left operand is less than that of the right operand.

&lt;=

Met if the value of the left operand is less than or equal to that of the right operand.

Hint

In XML, the character < must always be represented by &lt;. The character \>, on the other hand, can be used directly or represented by &gt;.

Negation, Combination, and Parentheses   

Conditions cond can be negated using not and can be combined using and or or, where and creates a stronger link than or. The result of such an operation is another condition.

Operation

Meaning

not(cond)

Met if cond is not met.

cond1 and cond2

Met if both cond1 and cond2 are met.

cond1 or cond2

Met if not both cond1 and cond2 are not met.

Conditions can be enclosed in parentheses ( ) to change the priority.

Example

The element X that is defined in DEMO\_ST\_CHECK1 is respected in serializations only if the ABAP data object bound to ROOT is not initial.

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <tt:s-cond check="not-initial(ROOT)">
      <X>
        <tt:value ref="ROOT"/>
      </X>
    </tt:s-cond>
  </tt:template>
</tt:transform>

Example

The element X that is defined in DEMO\_ST\_CHECK2 is respected in serializations only if the ABAP data object bound to ROOT1 is less than or equal to the value of the ABAP data object bound to ROOT2. It should be noted that the data root .ROOT2 cannot be specified directly in the condition and that ref('.ROOT2') must be used instead.

<?sap.transform simple?>
<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT1"/>
  <tt:root name="ROOT2"/>
  <tt:template>
    <tt:ref name="ROOT1">
      <tt:s-cond check="$ref &lt;= ref('.ROOT2')">
        <X>
          <tt:value/>
        </X>
      </tt:s-cond>
    </tt:ref>
  </tt:template>
</tt:transform>

Example

The element X that is defined in DEMO\_ST\_CHECK3 is respected in serializations only if the ABAP data object bound to ROOT1 is between the values of the ABAP data objects bound to ROOT2 and ROOT3. The data roots ROOT2 and ROOT3 cannot be specified directly in the condition and ref('.ROOT2') and ref('.ROOT3') must be used instead.

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT1"/>
  <tt:root name="ROOT2"/>
  <tt:root name="ROOT3"/>
  <tt:template>
    <tt:ref name="ROOT1">
      <tt:s-cond check="($ref &gt; ref('.ROOT2')) and
                        ($ref &lt; ref('.ROOT3'))">
        <X>
          <tt:value/>
        </X>
      </tt:s-cond>
    </tt:ref>
  </tt:template>
</tt:transform>