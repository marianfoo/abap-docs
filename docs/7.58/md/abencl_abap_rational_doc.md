  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompute_expressions.htm) →  [System Classes for Numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_math.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System%20Class%20CL_ABAP_RATIONAL%2C%20ABENCL_ABAP_RATIONAL_DOC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

System Class CL\_ABAP\_RATIONAL

The documented system class CL\_ABAP\_RATIONAL contains methods for calculating with rational numbers without any precision loss. All basic operations, such as addition, multiplication, division, and subtraction, can be performed without any rounding errors.

Example

Creation of any rational numbers from string values using the method FACTORY\_FROM\_STRING of the class CL\_ABAP\_RATIONAL.

DATA(lo\_rational) = cl\_abap\_rational=>factory\_from\_string(
  EXPORTING iv\_value =
\`123451319241923741092743102751927431209374123461928374612983746129\` &
\`3461293641239461293641237946192785619264124\` ).
" do some calculations
"multiplication
lo\_rational->mul( cl\_abap\_rational=>factory\_from\_string(
  \`12345131924192374109274310275192743120937412346192837461298374612\` &
  \`93461293641239461293641237946192785619264124\` ) ).
"division
lo\_rational->div( cl\_abap\_rational=>factory\_from\_string(
\`1234513192419237410927431027519274312093741234619283746129837461293\` &
\`461293641239461293641237946192785619264124\` ) ).
"addition
lo\_rational->add( cl\_abap\_rational=>factory\_from\_string(
  \`12345131924192374109274310275192743120937412346192837461298374612\` &
  \`93461293641239461293641237946192785619264124\` ) ).
"subtraction
lo\_rational->sub( cl\_abap\_rational=>factory\_from\_string(
\`1234513192419237410927431027519274312093741234619283746129837461293\` &
\`461293641239461293641237946192785619264124\` ) ).