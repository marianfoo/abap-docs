  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_st.htm) →  [ST - Modularization with Subtemplates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_modularization.htm) → 

ST - tt:apply, Call Subtemplate

Syntax

<tt:apply name="tmpl" *\[*ref="node"*\]*\>
  *\[*<tt:with-root name="root1" *\[*ref="node1"*\]* />
   <tt:with-root name="root2" *\[*ref="node2"*\]* />
   ...*\]*
  *\[*<tt:with-parameter name="para1"
                      *\[*ref="node1"*|*val="val1"*|*var="var1"*\]* />
   <tt:with-parameter name="para2"
                      *\[*ref="node2"*|*val="val2"*|*var="var2"*\]* />
   ...*\]*
</tt:apply>

Effect

A subtemplate tmpl (defined with [tt:template](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_template_sub.htm)) can be called in any other template using the ST statement tt:apply. The subtemplate is processed at this point when the including template is executed.

-   If separate data roots are declared using [tt:root](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_template_sub.htm) in the called subtemplate, you can set them with the ST statement tt:with-root. It is then not possible to specify the optional attribute ref in the statement tt:apply. tt:with-root sets the data root of the name specified in name to the node specified in ref or binds the data root to the ABAP data object currently bound to the specified node. If ref is not specified, the current node of the calling template is used. Local data roots that are not bound to a node remain undefined, that is, they do not refer to an ABAP data object. At the beginning of a subtemplate of this type, the current node is undefined.

-   If no separate data roots are declared using [tt:root](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_template_sub.htm) in a subtemplate tmpl, the root node of the tree structure of the called subtemplate is set either explicitly with the optional attribute ref or implicitly to the current node of the calling template at the call position.

-   If formal parameters are declared using [tt:parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_parameter.htm) in the called subtemplate, the statement tt:with-parameter can be used to associate them with actual parameters. As actual parameters, ref can be used to specify data roots, var to specify variables, and val to specify [values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_abap_representation.htm). Depending on the category of formal parameter, the values of the specified actual parameters are either passed in the call or copied when the subtemplate ends (see example below).

In this case, pass by parameter can be seen as a special case of assignment, which means that the same principle applies as for [tt:assign](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_assign.htm):

-   An assignment with data nodes as the target is possible only in deserializations.

-   An assignment with data nodes as the source is possible only in serializations.

Examples without pass by parameter

The following simple transformation contains two templates: a main template TEMP\_MAIN and a subtemplate TEMP\_SUB without its own data roots. The subtemplate is bound to the main template seven times with tt:apply; the respective current node is set with tt:ref beforehand. This ST program can transform a nested structure symmetrically.

<tt:transform template="TEMP\_MAIN"
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template name="TEMP\_MAIN">
    <week>
      <day1 tt:ref="ROOT.DAY1">
        <tt:apply name="TEMP\_SUB" />
      </day1>
      <day2 tt:ref="ROOT.DAY2">
        <tt:apply name="TEMP\_SUB" />
      </day2>
      <day3 tt:ref="ROOT.DAY3">
        <tt:apply name="TEMP\_SUB" />
      </day3>
      <day4 tt:ref="ROOT.DAY4">
        <tt:apply name="TEMP\_SUB" />
      </day4>
      <day5 tt:ref="ROOT.DAY5">
        <tt:apply name="TEMP\_SUB" />
      </day5>
      <day6 tt:ref="ROOT.DAY6">
        <tt:apply name="TEMP\_SUB" />
      </day6>
      <day7 tt:ref="ROOT.DAY7">
        <tt:apply name="TEMP\_SUB" />
      </day7>
    </week>
  </tt:template>
  <tt:template name="TEMP\_SUB">
    <name>
      <tt:value ref="$ref.name" />
    </name>
    <work>
      <tt:value ref="$ref.work" />
    </work>
  </tt:template>
</tt:transform>

The following ABAP program can call the transformation:

TYPES: BEGIN OF day,
         name TYPE string,
         work(1) TYPE c,
       END OF day.
DATA: BEGIN OF week,
        day1 TYPE day,
        day2 TYPE day,
        day3 TYPE day,
        day4 TYPE day,
        day5 TYPE day,
        day6 TYPE day,
        day7 TYPE day,
      END OF week.
DATA xml\_string TYPE string.
DATA result LIKE week.
week-day1-name = 'Monday'.    week-day1-work = 'X'.
week-day2-name = 'Tuesday'.   week-day2-work = 'X'.
week-day3-name = 'Wednesday'. week-day3-work = 'X'.
week-day4-name = 'Thursday'.  week-day4-work = 'X'.
week-day5-name = 'Friday'.    week-day5-work = 'X'.
week-day6-name = 'Saturday'.  week-day6-work = ' '.
week-day7-name = 'Sunday'.    week-day7-work = ' '.
CALL TRANSFORMATION ...
  SOURCE root = week
  RESULT XML xml\_string.
CALL TRANSFORMATION ...
  SOURCE XML xml\_string
  RESULT root = result.

The result of the serialization is the following:

<week>
  <day1>
    <name>Monday</name>
    <work>X</work>
  </day1>
  <day2>
    <name>Tuesday</name>
    <work>X</work>
  </day2>
  <day3>
    <name>Wednesday</name>
    <work>X</work>
  </day3>
  <day4>
    <name>Thursday</name>
    <work>X</work>
  </day4>
  <day5>
    <name>Friday</name>
    <work>X</work>
  </day5>
  <day6>
    <name>Saturday</name>
    <work/>
  </day6>
  <day7>
    <name>Sunday</name>
    <work/>
  </day7>
</week>

After deserialization, result has the same content as struc.

The simple transformation below has the same function as the previous one and can be called with the same result using the specified ABAP program. In contrast to the transformation in the previous example, subtemplate TEMP\_SUB has a separate data root here, local, to which another data node tt.apply is passed in each bind.

<tt:transform template="TEMP\_MAIN"
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template name="TEMP\_MAIN">
    <week>
      <day1>
        <tt:apply name="TEMP\_SUB">
          <tt:with-root name="local" ref="ROOT.DAY1" />
        </tt:apply>
      </day1>
      <day2>
        <tt:apply name="TEMP\_SUB">
          <tt:with-root name="local" ref="ROOT.DAY2" />
        </tt:apply>
      </day2>
      <day3>
        <tt:apply name="TEMP\_SUB">
          <tt:with-root name="local" ref="ROOT.DAY3" />
        </tt:apply>
      </day3>
      <day4>
        <tt:apply name="TEMP\_SUB">
          <tt:with-root name="local" ref="ROOT.DAY4" />
        </tt:apply>
      </day4>
      <day5>
        <tt:apply name="TEMP\_SUB">
          <tt:with-root name="local" ref="ROOT.DAY5" />
        </tt:apply>
      </day5>
      <day6>
        <tt:apply name="TEMP\_SUB">
          <tt:with-root name="local" ref="ROOT.DAY6" />
        </tt:apply>
      </day6>
      <day7>
        <tt:apply name="TEMP\_SUB">
          <tt:with-root name="local" ref="ROOT.DAY7" />
        </tt:apply>
      </day7>
    </week>
  </tt:template>
  <tt:template name="TEMP\_SUB">
    <tt:context>
      <tt:root name="local" />
    </tt:context>
    <name>
       <tt:value ref="local.name" />
    </name>
    <work>
       <tt:value ref="local.work" />
    </work>
  </tt:template>
</tt:transform>

The simple transformation below also has the same function as the ones before. In this case, subtemplate TEMP\_SUB has two separate data roots, local1 and local2, to which data nodes are passed in statement tt.apply. This example demonstrates the use of local data roots and their addressing. In a real case, subtemplates help to reuse code and make simple transformations clearer.

<tt:transform template="TEMP\_MAIN"
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template name="TEMP\_MAIN">
    <week>
      <day1>
        <tt:apply name="TEMP\_SUB">
          <tt:with-root name="local1" ref="ROOT.DAY1.NAME" />
          <tt:with-root name="local2" ref="ROOT.DAY1.WORK" />
        </tt:apply>
      </day1>
      <day2>
        <tt:apply name="TEMP\_SUB">
          <tt:with-root name="local1" ref="ROOT.DAY2.NAME" />
          <tt:with-root name="local2" ref="ROOT.DAY2.WORK" />
        </tt:apply>
      </day2>
      <day3>
        <tt:apply name="TEMP\_SUB">
          <tt:with-root name="local1" ref="ROOT.DAY3.NAME" />
          <tt:with-root name="local2" ref="ROOT.DAY3.WORK" />
        </tt:apply>
      </day3>
      <day4>
        <tt:apply name="TEMP\_SUB">
          <tt:with-root name="local1" ref="ROOT.DAY4.NAME" />
          <tt:with-root name="local2" ref="ROOT.DAY4.WORK" />
        </tt:apply>
      </day4>
      <day5>
        <tt:apply name="TEMP\_SUB">
          <tt:with-root name="local1" ref="ROOT.DAY5.NAME" />
          <tt:with-root name="local2" ref="ROOT.DAY5.WORK" />
        </tt:apply>
      </day5>
      <day6>
        <tt:apply name="TEMP\_SUB">
          <tt:with-root name="local1" ref="ROOT.DAY6.NAME" />
          <tt:with-root name="local2" ref="ROOT.DAY6.WORK" />
        </tt:apply>
      </day6>
      <day7>
        <tt:apply name="TEMP\_SUB">
          <tt:with-root name="local1" ref="ROOT.DAY7.NAME" />
          <tt:with-root name="local2" ref="ROOT.DAY7.WORK" />
        </tt:apply>
      </day7>
    </week>
  </tt:template>
  <tt:template name="TEMP\_SUB">
    <tt:context>
      <tt:root name="local1" />
      <tt:root name="local2" />
    </tt:context>
    <name>
      <tt:value ref=".local1" />
    </name>
    <work>
      <tt:value ref=".local2" />
    </work>
  </tt:template>
</tt:transform>

Example with pass by parameter

The transformation below shows how parameters are passed to a subtemplate.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:variable name="VARI1" val="1"/>
  <tt:variable name="VARI2" val="2"/>
  <tt:variable name="VARI3" val="3"/>
  <tt:template>
    <tt:apply name="SUB">
      <tt:with-parameter name="PARA1" var="VARI1"/>
      <tt:with-parameter name="PARA2" var="VARI2"/>
      <tt:with-parameter name="PARA3" var="VARI3"/>
    </tt:apply>
    <X0>
      <X1>
        <tt:write var="VARI1"/>
      </X1>
      <X2>
        <tt:write var="VARI2"/>
      </X2>
      <X3>
        <tt:write var="VARI3"/>
      </X3>
    </X0>
  </tt:template>
  <tt:template name="SUB">
    <tt:context>
      <tt:parameter kind="in" name="PARA1" val="4"/>
      <tt:parameter kind="out" name="PARA2"/>
      <tt:parameter kind="in/out" name="PARA3"/>
    </tt:context>
    <tt:assign to-var="PARA2" var="PARA3"/>
    <tt:assign to-var="PARA3" var="PARA1"/>
    <tt:assign to-var="PARA1" val="555"/>
  </tt:template>
</tt:transform>

The result of the transformation is:

<X0>
  <X1>1</X1>
  <X2>3</X2>
  <X3>1</X3>
</X0>

The input parameter PARA1 is changed in the subtemplate, but the changed value is not passed back to the actual parameter VARI1.

The output parameter PARA2 is set to the value of actual parameter VARI3, which is passed to the subtemplate, and this value is returned to the actual parameter VARI2.

The input/output parameter PARA3 is set to the value of actual parameter VARI1, which is passed to the subtemplate, and this value is returned to the actual parameter VARI3.